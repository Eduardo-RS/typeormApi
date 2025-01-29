import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/user.routes';

const app = express();

//Middlewares
app.use(morgan('dev')); // Lee peticiones HTTP
app.use(cors()); // Permite el acceso desde otros clientes
app.use(express.json()); //Leer json
app.use(router);

export default app;