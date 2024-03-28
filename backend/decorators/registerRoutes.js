const express = require("express");
const controllers = require("../controllers/controllers");

function registerRoutes(app, db) {
    controllers.forEach((Controller) => {
        try {
            const instance = new Controller(db);
            const basePath = instance.basePath;
            const router = express.Router();

            if (!instance.routes) return;

            instance.routes.forEach((route) => {
                const { path, handler, method } = route;
                router[method](path, handler);
            });

            app.use(basePath, router);

            console.log(`Registered controller: ${Controller.name}`);
        } catch (err) {
            throw new Error(`Error registering controller: ${Controller.name}`);
        }
    });
}

module.exports = registerRoutes;
