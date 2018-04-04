import { Component } from "@nestjs/common";
import { Response } from "express";
import * as path from 'path';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { imeis } from "../entitys/imeis.entity";
import * as crypto from 'crypto';

@Component()
export class IndexService{
    constructor(
        @InjectRepository(imeis)
        private repository:Repository<imeis>
    ){

    }
    //返回首页
    index(res:Response){
        res.header('Content-Type',"text/html")
        return res.sendFile(path.resolve("./src/public/index.html"));
    }
    
    //验证imei
    async validate(md5IMEI:string){
        let imeisArr:Array<imeis> = await this.repository.find();
        console.log(md5IMEI)
        let result = imeisArr
                        .map((val:any) => crypto.createHash('md5').update(val.imei).digest('hex'))
                        .indexOf(md5IMEI)
        return new Promise<string>((resolve, reject) => {
            if(result != -1) resolve("successful");
            else resolve("err");
        })
    }
}