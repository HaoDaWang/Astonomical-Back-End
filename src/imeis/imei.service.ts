import { Component } from "@nestjs/common";
import { imeis } from "../entitys/imeis.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientDTO } from "../DTOs/client.dto";

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
    async add(imei:string):Promise<ClientDTO>{
        //检查是否有重复值
        let result:Array<imeis> = await this.repository.query(`select * from imeis where imei='${imei}'`)
        return new Promise<ClientDTO>( async (resolve, reject) => {
            if(result.length == 0) {
                await this.repository.insert({imei:imei});
                resolve({success:true})
            }
            else resolve({err:true})
        })
    }
}