import express from 'express';
import morgan from 'morgan';
//importando mis rutas de prokects
import projectRouter from './routes/projects'
import taskRouter from './routes/tasks'
//iniciando la instancia de express
const app = express();


//configuraciones



//middleawares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//rutas
app.use('/api/projects',projectRouter);
app.use('/api/tasks',taskRouter);

//archivos estaticos


//exportando por defecto
export default app;



