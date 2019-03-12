import express from 'express';
import artistRouter from './routes/artistRouter';
import albumRouter from './routes/albumRouter';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
mongoose.connect('mongodb://localhost/artistdb');

// process incoming json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cors
app.use(cors());

app.use('/api/v1/', artistRouter);
app.use('/api/v1/', albumRouter);

app.listen(8000, () => {
    console.log('Server started on http://localhost:8000');
});
