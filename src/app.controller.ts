import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { join } from "path";
import { createReadStream } from "fs";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Param() params: any, @Req() request: Request, @Res() res: Response) {
        const path = request.originalUrl === "/" ? "/frontend/index.html" : "/frontend/" + request.originalUrl;
        console.log(path);
        const file = createReadStream(join(process.cwd(), path));

        const fileName = request.originalUrl === "/" ? "/index.html" : request.originalUrl;
        const fullUrl = request.protocol + "://" + request.get("host") + fileName;

        if (!fullUrl) {
            console.warn("NOT found: " + fullUrl + " | file name: " + fileName);
            return;
        }
        file.pipe(res);
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
