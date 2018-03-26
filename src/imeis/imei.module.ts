import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { imeis } from "../entitys/imeis.entity";
import { IMEIController } from "./imei.controller";
import { IMEIService } from "./imei.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([imeis])
    ],
    controllers:[
        IMEIController
    ],
    components:[
        IMEIService
    ]
})
export class IMEIModule{}