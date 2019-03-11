import express from 'express';
import albumRouter from './routes/albumRouter';
import artistRouter from './routes/artistRouter';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
mongoose.connect('mongodb://localhost/artistdb');

// Creates body from incoming json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/', albumRouter);
app.use('/api/v1/', artistRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
