import express from "express";
import pingCheck from "../../controller";
import submissionRouter from "./submissionRouter";

const v1Routes = express.Router();

v1Routes.use('/submissions',submissionRouter)

v1Routes.get('/ping',pingCheck)


export default v1Routes