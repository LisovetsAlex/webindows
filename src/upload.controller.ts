import { Controller, Get, Param, Res, Req, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
const path = require("path");
const fs = require("fs");

@Controller("upload")
export class UploadController {
    constructor(private readonly appService: AppService) {}

    @Post("app/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        console.log(request);
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
