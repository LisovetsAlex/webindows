import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(process.env.PORT, "0.0.0.0");
    console.log("Server started at http://localhost:3000");
}
bootstrap();
