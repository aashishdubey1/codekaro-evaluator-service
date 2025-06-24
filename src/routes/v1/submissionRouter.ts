import express from "express";
import { validate } from "../../validator/validate";
import { SubmissionZodSchema } from "../../dtos/submissionDto";
import createSubmission from "../../controller/submissionController";


const submissionRouter = express.Router();


submissionRouter.post(
    '/',
    validate(SubmissionZodSchema),
    createSubmission
)

export default submissionRouter