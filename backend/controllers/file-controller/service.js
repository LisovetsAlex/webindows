const fs = require("fs");
const path = require("path");

class FileService {
    createFolderWithMetadata(user, folderName, folderPath) {
        const metadata = {
            name: folderName,
            type: "folder",
            location: folderPath,
            creationDate: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            size: 0,
            contains: "files: 0, folders: 0",
            owner: user._id,
            share: {
                public: false,
                read: false,
                write: false,
                whiteList: [],
                blackList: [],
            },
            other: {
                icon: "Assets/Icons/syncui.dll_14_135.ico",
            },
        };

        try {
            const joinedPath = path.join(__dirname, "../../system", folderPath);
            const joinedFolderPath = path.join(joinedPath, folderName);
            const joinedMetadataPath = path.join(joinedPath, `m_${folderName}.json`);

            if (fs.existsSync(joinedFolderPath)) return "exists";

            fs.mkdirSync(joinedFolderPath);
            fs.writeFile(joinedMetadataPath, JSON.stringify(metadata), "utf8", (err) => {});
            return "created";
        } catch (error) {
            return null;
        }
    }

    getAllMetadataInFolder(user, folderPath) {
        try {
            const result = [];
            const joinedPath = path.join(__dirname, "../../system", folderPath);
            const fileNames = fs.readdirSync(joinedPath);

            for (const name of fileNames) {
                if (!name.startsWith("m_")) continue;

                const filePath = path.join(joinedPath, name);
                const content = JSON.parse(fs.readFileSync(filePath, "utf8"));

                if (!this.hasPermissionRead(user, content)) continue;

                result.push(content);
            }

            this.updateMetadata(folderPath);
            return result;
        } catch (error) {
            return null;
        }
    }

    getMetadataOfFolder(folderPath) {
        try {
            const joinedPath = path.join(
                __dirname,
                "../../system",
                folderPath,
                "../",
                `m_${path.basename(folderPath)}.json`
            );
            const content = JSON.parse(fs.readFileSync(joinedPath, "utf8"));
            return content;
        } catch (error) {
            return null;
        }
    }

    deleteFolder(user, folderPath) {
        try {
            const joinedPath = path.join(__dirname, "../../system", folderPath);
            const metadataPath = path.join(joinedPath, "../", `m_${path.basename(folderPath)}.json`);
            const metadata = this.getMetadataOfFolder(folderPath);
            if (!this.hasPermissionWrite(user, metadata)) return false;
            fs.rm(joinedPath, { recursive: true }, (err) => {});
            fs.rm(metadataPath, { recursive: false }, (err) => {});
            return true;
        } catch (error) {
            return null;
        }
    }

    updateFolderMetadata(user, folderPath, data) {
        try {
            const joinedPath = path.join(__dirname, "../../system", folderPath);
            const metadataPath = path.join(joinedPath, "../", `m_${path.basename(folderPath)}.json`);
            const metadata = this.getMetadataOfFolder(folderPath);
            const newMetadata = this.updateMetadataPartial(data, metadata);
            if (!this.isOwner(user, newMetadata)) return false;
            fs.writeFile(metadataPath, JSON.stringify(newMetadata), "utf8", (err) => {});
            return true;
        } catch (error) {
            return null;
        }
    }

    updateMetadata(folderPath) {
        try {
            const joinedPath = path.join(__dirname, "../../system", folderPath);
            const totalSize = this.getFolderSize(joinedPath);
            const numFiles = this.getNumberOfFiles(joinedPath);
            const numFolders = this.getNumberOfFolders(joinedPath);
            const metadataFilePath = path.join(joinedPath, "../", `m_${path.basename(folderPath)}.json`);
            const metadata = this.getMetadataOfFolder(folderPath);
            metadata.size = totalSize;
            metadata.contains = `files: ${numFiles}, folders: ${numFolders}`;
            if (numFiles > 0 || numFolders > 0) {
                metadata.other.icon = "dmdskres.dll_14_372.ico";
            }
            fs.writeFile(metadataFilePath, JSON.stringify(metadata), "utf8", (err) => {});
            return true;
        } catch (error) {
            return null;
        }
    }

    getPublicFile(filePath) {
        try {
            const joinedPath = path.join(__dirname, "../../system", filePath);
            fs.access(joinedPath, fs.constants.F_OK, (err) => {});
            return joinedPath;
        } catch (err) {
            return null;
        }
    }

    getNumberOfFolders(folderPath) {
        try {
            const contents = fs.readdirSync(folderPath);
            let numberOfFolders = 0;
            for (let i = 0; i < contents.length; i++) {
                const itemPath = path.join(folderPath, contents[i]);
                const stats = fs.statSync(itemPath);
                if (!stats.isDirectory()) continue;
                numberOfFolders++;
            }
            return numberOfFolders;
        } catch (err) {
            return 0;
        }
    }

    getNumberOfFiles(folderPath) {
        try {
            const contents = fs.readdirSync(folderPath);
            let numberOfNonFolderFiles = 0;
            for (let i = 0; i < contents.length; i++) {
                const itemPath = path.join(folderPath, contents[i]);
                const stats = fs.statSync(itemPath);
                if (contents[i].startsWith("m_")) continue;
                if (!stats.isFile()) continue;
                numberOfNonFolderFiles++;
            }
            return numberOfNonFolderFiles;
        } catch (err) {
            return 0;
        }
    }

    getFolderSize(folderPath) {
        let totalSize = 0;
        const contents = fs.readdirSync(folderPath);
        for (let i = 0; i < contents.length; i++) {
            const itemPath = path.join(folderPath, contents[i]);
            const stats = fs.statSync(itemPath);
            if (stats.isDirectory()) {
                totalSize += this.getFolderSize(itemPath);
                continue;
            }
            totalSize += stats.size;
        }
        return totalSize;
    }

    hasPermissionRead(user, content) {
        if (this.isOwner(user, content)) return true;
        if (this.isInBlackList(user, content)) return false;
        if (!this.isPublic(content) && !this.isInWhiteList(user, content)) return false;
        if (!this.isPublic(content)) return false;
        if (!this.canRead(content)) return false;
        return true;
    }

    hasPermissionWrite(user, content) {
        if (this.isOwner(user, content)) return true;
        if (this.isInBlackList(user, content)) return false;
        if (!this.isPublic(content) && !this.isInWhiteList(user, content)) return false;
        if (!this.isPublic(content)) return false;
        if (!this.canWrite(content)) return false;
        return true;
    }

    canWrite(content) {
        return content.share.write;
    }

    canRead(content) {
        return content.share.read;
    }

    isOwner(user, content) {
        return user._id === content.owner;
    }

    isInBlackList(user, content) {
        const blackList = content.share.blackList;
        for (let i = 0; i < blackList.length; i++) {
            if (user._id === blackList[i]) return true;
        }
        return false;
    }

    isInWhiteList(user, content) {
        const whiteList = content.share.whiteList;
        for (let i = 0; i < whiteList.length; i++) {
            if (user._id === whiteList[i]) return true;
        }
        return false;
    }

    isPublic(content) {
        return content.share.public;
    }

    updateMetadataPartial(newValue, oldValue) {
        const obj = {
            name: newValue.name ?? oldValue.name,
            type: newValue.type ?? oldValue.type,
            location: newValue.location ?? oldValue.location,
            creationDate: newValue.creationDate ?? oldValue.creationDate,
            lastModified: newValue.lastModified ?? oldValue.lastModified,
            size: newValue.size ?? oldValue.size,
            contains: newValue.contains ?? oldValue.contains,
            owner: newValue.owner ?? oldValue.owner,
            share: {
                public: newValue.share?.public ?? oldValue.share?.public,
                read: newValue.share?.read ?? oldValue.share?.read,
                write: newValue.share?.write ?? oldValue.share?.write,
                whiteList: newValue.share?.whiteList ?? oldValue.share?.whiteList,
                blackList: newValue.share?.blackList ?? oldValue.share?.blackList,
            },
            other: {
                icon: newValue.other?.icon ?? oldValue.other?.icon,
            },
        };
        return obj;
    }
}

module.exports = FileService;
