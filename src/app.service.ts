import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class AppService {
    transformFilePath(filePath: string): string {
        const parts = filePath.split("/");
        const index = parts.indexOf("webindows");
        if (index !== -1) {
            const newPath = parts.slice(index).join("/");
            return `/${newPath}`;
        } else {
            return filePath;
        }
    }
}
