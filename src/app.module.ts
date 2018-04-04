import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from "./users/user.module";
import { CORSMiddleware } from "./middlewares/cors.middleware";
import { UserService } from "./users/user.service";
import { Users } from "./entitys/users.entity";
import { imeis } from "./entitys/imeis.entity";
import { IMEIModule } from "./imeis/imei.module";
import { IndexModule } from "./index/index.module";
import { StaticMiddleware } from "./middlewares/static.middleware";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type:"mysql",
            host:"localhost",
            port:3306,
            username:"root",
            password:"zzh1997422",
            database:"back",
            entities:[
                imeis,
                Users
            ],
            synchronize:true
        }),
        UserModule,
        IMEIModule,
        IndexModule
    ]
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void | MiddlewaresConsumer {
        consumer
            .apply(CORSMiddleware)
            .forRoutes(
                {path:"*",method:RequestMethod.ALL}
            )
            .apply(StaticMiddleware)
            .forRoutes(
                {path:"*",method:RequestMethod.ALL}
            )
    }
}