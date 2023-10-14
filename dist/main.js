"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(process.env.PORT || 3000, "0.0.0.0");
    console.log("Server started at http://localhost:3000");
}
bootstrap();
//# sourceMappingURL=main.js.map