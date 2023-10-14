"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getFile(res) {
        const file = (0, node_fs_1.createReadStream)((0, node_path_1.join)(process.cwd(), `files/WindowsWebHTML.html`));
        file.pipe(res);
    }
    getSomeFile(params, res) {
        const file = (0, node_fs_1.createReadStream)((0, node_path_1.join)(process.cwd(), `files/${params.name}`));
        file.pipe(res);
    }
    getAppFile(params, res) {
        const file = (0, node_fs_1.createReadStream)((0, node_path_1.join)(process.cwd(), `files/Apps/${params.name}`));
        file.pipe(res);
    }
    getAssetFile(params, res) {
        const file = (0, node_fs_1.createReadStream)((0, node_path_1.join)(process.cwd(), `files/Assets/${params.name}`));
        file.pipe(res);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("/app"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSomeFile", null);
__decorate([
    (0, common_1.Get)('/Apps/:name'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAppFile", null);
__decorate([
    (0, common_1.Get)('/Assets/:name'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAssetFile", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(""),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map