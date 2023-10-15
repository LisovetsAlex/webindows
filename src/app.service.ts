import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class AppService {
    extractFileNameFromUrl(fullUrl: string): string {
        const urlPath = new URL(fullUrl).pathname;
        const fileNameWithParam = path.basename(urlPath);
        return fileNameWithParam;
    }
}
