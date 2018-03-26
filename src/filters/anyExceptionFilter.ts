import { Catch, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch(exception: any, response: Response) {
        response
           .redirect('/');
    }
}