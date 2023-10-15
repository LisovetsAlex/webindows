import { Controller, Get, Res, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import fs from "fs";
import path from "path";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/:filepath(*)")
    getFile(@Req() request: Request, @Res() res: Response) {
        const options = {
            root: path.join(__dirname, "..", "./frontend"),
        };

        const fileName = request.originalUrl === "/" ? "/index.html" : request.originalUrl;
        if (!fs.existsSync(fileName)) res.status(404).send("File not found");

        res.sendFile(fileName, options);
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
