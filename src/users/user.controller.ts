import { Controller, Get, Put, Body, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { Users } from "../entitys/users.entity";
import { UserModel } from "./user.interface";

@Controller('user')
export class UserController{

    constructor(
        private userService:UserService
    ){}
    
    查询所有用户
    @Get('all')
    findAll():Promise<Users[]>{
        return this.userService.findAll();
    }
    
    //更新密码
    @Put('update')
    update(@Body() body:UserModel):Promise<void>{
        return this.userService.update(body.username,body.password);
    }

    //验证账号密码
    @Post('validate')
    validate(@Body() body:UserModel):Promise<Users | undefined>{
        return this.userService.validate(body.username, body.password);
    }
}