import { AppService } from "./app.service";
import type { Response } from "express";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFile(res: Response): void;
    getSomeFile(params: any, res: Response): void;
    getAppFile(params: any, res: Response): void;
    getAssetFile(params: any, res: Response): void;
}
