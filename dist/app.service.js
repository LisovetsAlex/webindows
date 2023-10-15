"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let AppService = class AppService {
    transformFilePath(filePath) {
        const parts = filePath.split("/");
        const index = parts.indexOf("webindows");
        if (index !== -1) {
            const newPath = parts.slice(index).join("/");
            return `/${newPath}`;
        }
        else {
            return filePath;
        }
    }
    getFileExtension(filename) {
        const parts = filename.split(".");
        const extension = parts[parts.length - 1];
        return extension;
    }
    getFilePath(fileName) {
        const projectRootDir = process.cwd();
        const filePath = this.searchFileInDir(projectRootDir, fileName);
        if (!filePath)
            return null;
        const relativePath = path.relative(projectRootDir, filePath);
        return path.resolve(relativePath);
    }
    searchFileInDir(dir, fileName) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                const foundFilePath = this.searchFileInDir(filePath, fileName);
                if (foundFilePath) {
                    return foundFilePath;
                }
            }
            else if (file === fileName) {
                return filePath;
            }
        }
        return null;
    }
    extractFileNameFromUrl(fullUrl) {
        const urlPath = new URL(fullUrl).pathname;
        const fileNameWithParam = path.basename(urlPath);
        return fileNameWithParam;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map