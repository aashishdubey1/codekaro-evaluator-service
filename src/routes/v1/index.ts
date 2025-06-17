import express, { Request,Response } from "express";

const v1Routes = express.Router();


v1Routes.get('/ping',(_ :Request,res:Response)=>{
    res.json({msg:"PONG"})
})

export default v1Routes