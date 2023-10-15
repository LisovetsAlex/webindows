import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
const path = require("path");
import { createReadStream } from "fs";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        console.log(__dirname.replace(/\\dist$/, ""));
        const options = {
            root: path.join(__dirname.replace(/\\dist$/, "")),
        };

        const fileName = request.originalUrl === "/" ? "frontend/index.html" : "frontend" + request.originalUrl;
        res.sendFile(fileName, options, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Sent:", fileName);
            }
        });

        //const fileName = request.originalUrl === "/" ? "frontend/index.html" : "frontend" + request.originalUrl;
        //const fullUrl = join(__dirname, "..", fileName);

        //res.sendFile(fullUrl);
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
