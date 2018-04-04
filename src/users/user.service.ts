import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entitys/users.entity";
import { Repository } from "typeorm";
import { ClientDTO } from "../DTOs/client.dto";
import { resolve } from "url";

@Component()
export class UserService{
    constructor(
        @InjectRepository(Users)
        private repository:Repository<Users>
    ){

    }
    
    //查找所有用户
    async findAll():Promise<Users[]>{
        return await this.repository.find();
    }

    //更新密码
    async update(username:string, password:string):Promise<void>{
        return await this.repository.query(`update users set password='${password}' where username='${username}'`);
    }

    //验证账号密码
    async validate(username?:string, password?:string):Promise<ClientDTO>{
        let user:Users | undefined = await this.repository.findOneById(username);
        return new Promise<ClientDTO>((resolve, reject) => {
            if(user && username == user.username && password == user.password){
                resolve({success:true})
            }
            else {
                resolve({err:true});
            }
        })
    }
}