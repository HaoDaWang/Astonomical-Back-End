import { Module } from "@nestjs/common";
import { IndexController } from "./index.controller";
import { IndexService } from "./index.service";

@Module({
    controllers:[
        IndexController
    ],
    components:[
        IndexService
    ]
})
export class IndexModule{ }