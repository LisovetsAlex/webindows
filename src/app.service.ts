import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class AppService {
    getFilePath(fileName: string) {
        const projectRootDir = process.cwd();

        const filePath = this.searchFileInDir(projectRootDir, fileName);

        if (!filePath) return null;

        return filePath;
    }

    private searchFileInDir(dir: string, fileName: string): string | null {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                const foundFilePath = this.searchFileInDir(filePath, fileName);
                if (foundFilePath) {
                    return foundFilePath;
                }
            } else if (file === fileName) {
                return filePath;
            }
        }
        return null;
    }

    extractFileNameFromUrl(fullUrl: string): string {
        const urlPath = new URL(fullUrl).pathname;
        const fileNameWithParam = path.basename(urlPath);
        return fileNameWithParam;
    }
}
