const express = require("express");
const controllers = require("../controllers/controllers");
const multer = require("multer");

const upload = multer();

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
