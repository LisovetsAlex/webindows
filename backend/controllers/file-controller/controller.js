const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");
const FileService = require("./service");

@Controller("/files")
class FileController {
    constructor() {
        this.service = new FileService();
    }

    @Route("POST", "/create/folder")
    createFolder(req, res) {
        const user = req.body.user;
        const name = req.body.name;
        const path = req.body.path;
        const result = this.service.createFolderWithMetadata(user, name, path);
        if (!result) return res.send({ msg: "false", data: null });
        res.send({ msg: "true", data: result });
    }

    @Route("POST", "/get/folder")
    getFolder(req, res) {
        const user = req.body.user;
        const path = req.body.path;
        const result = this.service.getAllMetadataInFolder(user, path);
        if (!result) return res.send({ msg: "false", data: null });
        res.send({ msg: "true", data: result });
    }

    @Route("POST", "/delete/folder")
    deleteFolder(req, res) {
        const user = req.body.user;
        const path = req.body.path;
        const result = this.service.deleteFolder(user, path);
        if (!result) return res.send({ msg: "false", data: null });
        res.send({ msg: "true", data: result });
    }

    @Route("POST", "/update/folder")
    updateFolder(req, res) {
        const user = req.body.user;
        const path = req.body.path;
        const data = req.body.data;
        const result = this.service.updateFolderMetadata(user, path, data);
        if (!result) return res.send({ msg: "false", data: null });
        res.send({ msg: "true", data: result });
    }

    @Route("GET", "/get/public/:filepath(*)")
    getPublicFile(req, res) {
        const filepath = req.params.filepath;
        const result = this.service.getPublicFile(filepath);
        if (!result) return res.send({ msg: "false", data: null });
        res.sendFile(result);
    }

    @Route("GET", "/get/files/:filepath(*)")
    getFilesAt(req, res) {
        const filepath = req.params.filepath;
        const result = this.service.getFilesAt(filepath);
        if (!result) return res.send({ msg: "false", data: null });
        res.send(result);
    }

    @Route("GET", "/get/file/:filepath(*)")
    getFile(req, res) {
        const filepath = req.params.filepath;
        const result = this.service.getFile(filepath);
        if (!result) return res.send({ msg: "false", data: null });
        res.sendFile(result);
    }
}

module.exports = FileController;
