import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { UploadController } from "./upload.controller";

@Module({
    imports: [
        ThrottlerModule.forRoot([
            {
                ttl: 1000,
                limit: 25,
            },
        ]),
    ],
    controllers: [AppController, UploadController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class AppModule {}
