import express, {Express} from 'express';
import serverConfig from './config/server-config';
import apiRoutes from './routes/inedex';
import addJob from './producers/SampleQueueProducer';
import sampleWorker from './workers/SampleWorkers';
const app:Express = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.text())


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