const express = require("express");
const DBService = require("./service");
const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");
const { AppModel } = require("../../Models/app.model");

@Controller("/db/apps")
class DBController {
    constructor(db) {
        this.service = new DBService(db);
    }

    @Route("GET", "/all")
    async getAll(req, res) {
        await AppModel.find({}).then((data) => {
            console.log("Successfully got all apps");
            res.send(data);
        });
    }

    @Route("GET", "/one")
    async getOne(req, res) {
        await AppModel.findById(req.body.id).then((data) => {
            console.log("Successfully got one app");
            res.send(data);
        });
    }

    @Route("POST", "/create")
    async create(req, res) {
        const data = req.body;

        const newDocument = await AppModel.create(data).catch((err) => {
            console.log(err);
            res.send(false);
        });

        if (newDocument) {
            console.log("Successfully created app: " + newDocument._id);
            res.send(newDocument._id);
        }
    }

    @Route("PUT", "/update")
    async update(req, res) {
        const app = await AppModel.findById(req.body.id);

        const newApp = req.body.newData;

        // await AppModel.updateOne({ _id: req.body.id }, { $set: req.body.newData }).then((data) => {
        //     console.log("Successfully updated app");
        //     console.log(data);
        //     res.send(data);
        // });
    }

    @Route("DELETE", "/delete")
    async delete(req, res) {
        await AppModel.deleteOne({ _id: req.body.id }).then(() => {
            console.log("Successfully deleted app");
            res.send(true);
        });
    }
}

module.exports = DBController;
