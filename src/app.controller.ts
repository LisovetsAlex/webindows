import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
const path = require("path");
const fs = require("fs");

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        if (request.originalUrl.includes("favicon.ico")) return;

        let url = "";
        if (!request.originalUrl.includes("dist")) url = "./frontend/src";
        if (request.originalUrl.includes("dist")) url = "./frontend";
        if (request.originalUrl.includes("WebWindows")) url = "./frontend/src/";

        const options = {
            root: path.join(__dirname, "..", url),
        };

        let filePath = request.originalUrl;
        if (request.originalUrl.includes("WebWindows"))
            filePath = request.originalUrl += ".js";
        if (request.originalUrl === "/") filePath = "/index.html";

        res.sendFile(filePath, options);
    }
    /*  send file to download
    @Get()
    getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
        const file = createReadStream(join(process.cwd(), "package.json"));
        res.set({
            "Content-Type": "application/json",
            "Content-Disposition": 'attachment; filename="package.json"',
        });
        return new StreamableFile(file);
    }*/
}
