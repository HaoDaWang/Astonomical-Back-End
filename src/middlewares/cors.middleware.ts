import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Middleware()
export class CORSMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware | Promise<ExpressMiddleware> | Promise<Promise<ExpressMiddleware>> {
        return (req:Request, res:Response, next:NextFunction) => {
            console.log(req.url);
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");  
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        }
    }
}