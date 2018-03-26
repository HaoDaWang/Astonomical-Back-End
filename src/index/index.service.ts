import { Component } from "@nestjs/common";
import { Response } from "express";
import * as path from 'path';

@Component()
export class IndexService{
    index(res:Response){
        res.header('Content-Type',"text/html")
        return res.sendFile(path.resolve("./src/public/index.html"));
    }
}