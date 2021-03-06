import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import config from './config/config';
import router from './routes/routes';

//INIT DB
mongoose.connect(config.mongoUrl, () => {
    console.log('Congrats ! DB initialized !');
});

const app = express();

//MULTER
app.use(express.static(path.join(__dirname, 'public')));
//CALL routes
app.use(cors())
app.use(router);

//TEST INIT SEVER
app.listen(config.serverPort, () => {
    console.log(`Congrats ! Started on port : ${config.serverPort}`)
});