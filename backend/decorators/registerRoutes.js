const express = require("express");
const controllers = require("../controllers/controllers");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/Assets");
    },
    filename: function (req, file, cb) {
        const user = JSON.parse(req.body.user);
        const originalFilename = file.originalname;
        const sanitizedFilename = originalFilename.replace(/\s+/g, "_");

        const directory = "../frontend/public/Assets";
        const userId = user._id;

        fs.readdir(directory, (err, files) => {
            if (err) {
                console.error("Error reading directory:", err);
                return;
            }

            files.forEach((fileName) => {
                if (!fileName.includes(userId) && !fileName.includes("_bg_")) return;
                fs.unlink(path.join(directory, fileName), (err) => {
                    if (err) console.error("Error deleting file:", err);
                });
            });
        });

        cb(null, user._id + "_" + "_bg_" + sanitizedFilename);
    },
});

const upload = multer({ storage: storage });

function registerRoutes(app) {
    controllers.forEach((Controller) => {
        try {
            const instance = new Controller();
            const basePath = instance.basePath;
            const router = express.Router();

            if (!instance.routes) {
                console.log(`No routes found for controller: ${Controller.name}`);
                return;
            }

            console.log(`Registered controller routes: ${Controller.name}`);

            instance.routes.forEach((route) => {
                const { path, handler, method } = route;
                router[method](path, upload.fields([{ name: "user" }, { name: "file" }]), (req, res) => handler(instance, req, res));
                console.log(`   - Route (${method}): ${basePath + path}`);
            });

            app.use(basePath, router);
        } catch (err) {
            throw new Error(`Error registering controller: ${Controller.name}`);
        }
    });
}

module.exports = registerRoutes;
