import sampleQueue from "../queues/sampleQueue";

export default async function addJob(name:string,payload:Record<string,unknown>) {
    await sampleQueue.add(name,payload)
}
