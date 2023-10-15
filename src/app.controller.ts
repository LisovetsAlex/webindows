import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { join } from "path";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        const fileName = request.originalUrl === "/" ? "index.html" : request.originalUrl;
        const fullUrl = request.protocol + "://" + request.get("host") + fileName;

        console.log(fullUrl);

        if (!fullUrl) {
            console.warn("NOT found: " + fullUrl + " | file name: " + fileName);
            return;
        }
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
