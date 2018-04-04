import { Module } from "@nestjs/common";
import { IndexController } from "./index.controller";
import { IndexService } from "./index.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { imeis } from "../entitys/imeis.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([imeis])
    ],
    controllers:[
        IndexController
    ],
    components:[
        IndexService
    ]
})
export class IndexModule{ }