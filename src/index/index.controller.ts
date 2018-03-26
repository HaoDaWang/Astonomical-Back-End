import { Controller, Get, Res } from "@nestjs/common";
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
}