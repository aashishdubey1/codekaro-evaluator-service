import { Job } from "bullmq";
import { Ijob } from "../types/bullMqJobDefination";


export default class SampleJob implements Ijob {

    name:string;
    payload?: Record<string, unknown> | undefined;

    constructor(payload:Record<string,unknown>){
        this.payload = payload;
        this.name = this.constructor.name;
    };

    handle = (job?: Job) => {
        console.log("handler of the job called")
        if(job){
            console.log(job.name,job.data,job.id);
        }
    };

    failed = (job?:Job) : void => {
        console.log("job failed");
        if(job){
            console.log(job.id);
        }
    };
}