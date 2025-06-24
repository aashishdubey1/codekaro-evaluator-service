import { NextFunction, Request, Response } from "express";
import {z, ZodSchema } from "zod";


export const validate = (schema:ZodSchema<any>) => (req:Request,res:Response,next:NextFunction) => {
 try {
    schema.parse({
        ...req.body
    })
    next()
 } catch (error) {
    if(error instanceof z.ZodError){
        res.status(400).json({
            success:false,
            message:"Invalid Inputs",
            data:{},
            error:error.errors
        })
    }
    next(error);
 }   
}