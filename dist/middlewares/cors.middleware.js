"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CORSMiddleware = class CORSMiddleware {
    resolve() {
        return (req, res, next) => {
            console.log(`${req.url} Request`);
            // res.setHeader("Access-Control-Allow-Origin", "*");  
            // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");  
            // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
            // res.setHeader("X-Powered-By",' 3.2.1')  
            // res.setHeader("Content-Type", "application/json;charset=utf-8"); 
            next();
        };
    }
};
CORSMiddleware = __decorate([
    common_1.Middleware()
], CORSMiddleware);
exports.CORSMiddleware = CORSMiddleware;
