import { Controller, Get, Param, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { join } from "path";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Param() params: any, @Req() request: Request, @Res() res: Response) {
        const fileName = params.filepath === "" ? "webindows/frontend/index.html" : "webindows/frontend/" + params.filepath;
        const fullUrl = this.appService.transformFilePath(join(process.cwd(), fileName));
        console.log("LOG: fullUrl: " + fullUrl);
        console.log("LOG: req: " + request.originalUrl);
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
