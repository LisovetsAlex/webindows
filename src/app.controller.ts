import { Controller, Get, Param, Query, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { createReadStream } from "node:fs";
import { join } from "node:path";
import type { Response } from "express";

@Controller("")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("")
    getFile(@Res() res: Response) {
        const file = createReadStream(join(process.cwd(), `files/WindowsWebHTML.html`));
        file.pipe(res);
    }

    @Get(":name")
    getSomeFile(@Param() params: any, @Res() res: Response) {
        if (params.name == "favicon.ico") return;

        const file = createReadStream(join(process.cwd(), `files/${params.name}`));
        file.pipe(res);
    }

    @Get("/Apps/:name")
    getAppFile(@Param() params: any, @Res() res: Response) {
        const file = createReadStream(join(process.cwd(), `files/Apps/${params.name}`));
        file.pipe(res);
    }

    @Get("/Assets/:name")
    getAssetFile(@Param() params: any, @Res() res: Response) {
        const file = createReadStream(join(process.cwd(), `files/Assets/${params.name}`));
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
