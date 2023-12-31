import { AppService } from "./app.service";
import { Response, Request } from "express";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFile(request: Request, res: Response): void;
}
