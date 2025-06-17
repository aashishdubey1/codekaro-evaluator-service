import { Request,Response } from "express"


const pingCheck = function(_:Request,res:Response){
    res.json({msg:"pong"})
}

export default pingCheck