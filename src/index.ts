import express, {Express} from 'express';
import serverConfig from './config/server-config';
import apiRoutes from './routes/inedex';
const app:Express = express();


app.use('/api',apiRoutes);




app.listen(serverConfig.PORT,()=>{
  console.log(`Server is running on Port ${serverConfig.PORT}`)
});