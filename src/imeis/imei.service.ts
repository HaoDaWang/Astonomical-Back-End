import { Component } from "@nestjs/common";
import { imeis } from "../entitys/imeis.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Component()
export class IMEIService{
    constructor(
        @InjectRepository(imeis)
        private repository:Repository<imeis>
    ){}

    //获取所有imei
    async findAll():Promise<imeis[]>{
        return await this.repository.find();
    }

    //更新指定imei
    async update(imei:string, newIMEI:string):Promise<void>{
        return await this.repository.query(`update imeis set imei='${newIMEI}' where imei='${imei}'`)
    }

    //删除指定imei
    async remove(imei:string):Promise<void>{
        return await this.repository.query(`delete from imeis where imei='${imei}'`)
    }

    //增加imei
    async add(imei:string):Promise<void>{
        return await this.repository.insert({imei:imei});
    }
}