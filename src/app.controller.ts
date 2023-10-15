import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { join } from "path";
import { createReadStream } from "fs";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        const fileName = request.originalUrl === "/" ? "frontend/index.html" : "frontend" + request.originalUrl;
        const fullUrl = join(__dirname, "..", fileName);

        res.sendFile(fullUrl);
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
