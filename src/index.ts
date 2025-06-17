import express, {Express} from 'express';
import serverConfig from './config/server-config';
import apiRoutes from './routes/inedex';
import addJob from './producers/SampleQueueProducer';
import sampleWorker from './workers/sampleWorkers';
const app:Express = express();


app.use('/api',apiRoutes);




app.listen(serverConfig.PORT,()=>{
  console.log(`Server is running on Port ${serverConfig.PORT}`)


  sampleWorker("SampleQueue");

  addJob("SampleJob",{
    name:"Aashish",
    lang:"English",
    jobTitle:"Backend Dev",
    JobDesc:"A fullstack dev with backend heavy knowdlege"
  })



});