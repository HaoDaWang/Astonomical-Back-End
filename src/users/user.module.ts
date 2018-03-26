import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from "../entitys/users.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([Users])
    ],
    components:[
        UserService
    ],
    controllers:[
        UserController
    ]
})
export class UserModule{ }