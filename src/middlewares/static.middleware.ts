import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";
import * as path from 'path';
import * as fs from 'fs';

//封装readDir
let readDirFunc = (path:string):Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(path,(err:Error, files:string[]) => {
            if(err) throw err;
            resolve(files);
        })
    })
}

//将public作为静态目录
@Middleware()
export class StaticMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware | Promise<ExpressMiddleware> | Promise<Promise<ExpressMiddleware>> {
        return async (req:Request, res:Response, next:NextFunction) => {
            let filenameArr = await readDirFunc(path.resolve('./src/public'));
            let targetFile:string | undefined;
            for(let filename of filenameArr){
                if("/" + filename == req.url){
                    targetFile = req.url;
                    break;
                }
            }
            if(!targetFile) next(); 
            else {
                res.header('Content-Type',"text/html");
                return res.sendFile(path.resolve(`./src/public${targetFile}`))
            }
        }    
    }
}