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
        const fileName = this.appService.extractFileNameFromUrl(path.join(__dirname, "..", "./frontend", request.originalUrl));
        if (fileName === "favicon.ico") return;

        const options = {
            root: path.join(__dirname, "..", "./frontend"),
        };

        const filePath = request.originalUrl === "/" ? "index.html" : request.originalUrl;

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
