import { NextFunction, Request, Response } from "express";
import { SubmissionDto } from "../dtos/submissionDto";

export default async function createSubmission (req:Request,res:Response,next:NextFunction){
    
    const body = req.body as SubmissionDto

    res.status(200).json({
        success:true,
        message:"Submission Created",
        data: body,
        error:{}
    })

}