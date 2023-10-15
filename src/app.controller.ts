import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { join } from "path";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        const fullUrl = request.protocol + "://" + request.get("host") + request.originalUrl;
        const fileName = this.appService.extractFileNameFromUrl(fullUrl) || "index.html";
        const filePath = this.appService.getFilePath(fileName);
        if (!filePath) {
            console.warn("NOT found: " + filePath + " | file name: " + fileName);
            return;
        }
        res.sendFile(filePath);
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
