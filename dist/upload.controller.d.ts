import { AppService } from "./app.service";
import { Response, Request } from "express";
export declare class UploadController {
    private readonly appService;
    constructor(appService: AppService);
    getFile(request: Request, res: Response): void;
}
