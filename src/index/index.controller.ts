import { Controller, Get, Res, Post, Body } from "@nestjs/common";
import { IndexService } from "./index.service";
import { Response } from "express";

@Controller('')
export class IndexController{
    
    constructor(
        private indexService:IndexService
    ){

    }
    
    @Get('')
    index(@Res() res:Response){
        return this.indexService.index(res);
    }

    //验证imei
    @Post('validate')
    validate(@Body() body:{msg:string}){
        return this.indexService.validate(body.msg);
    }
}