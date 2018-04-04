import { Controller, Get, Delete, Param, Put, Post, Body } from "@nestjs/common";
import { IMEIService } from "./imei.service";
import { imeis } from "../entitys/imeis.entity";
import { IMEIModel } from "./imei.interface";
import { ClientDTO } from "../DTOs/client.dto";

@Controller("imei")
export class IMEIController{
    constructor(
        private imeiService:IMEIService
    ){ }

    //获取所有imei
    @Get('all')
    findAll():Promise<imeis[]>{
        return this.imeiService.findAll()
    }

    //删除imei
    @Delete('remove/:imei')
    remove(@Param() param:IMEIModel):Promise<void>{
        return this.imeiService.remove(param.imei);
    }

    //更新imei
    @Put('update')
    update(@Body() body:IMEIModel):Promise<void>{
        return this.imeiService.update(body.imei,body.newIMEI as string);
    }

    //增加imei
    @Post('add/:imei')
    add(@Param() param:IMEIModel):Promise<ClientDTO>{
        return this.imeiService.add(param.imei);
    }
}