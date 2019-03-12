import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import database from './config/database';
import { PORT } from './config/properties';
import artistsRoutes from './artists/artists.routes';

const app = express();
const router = express.Router();

database();

// process incoming json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cors
app.use(cors());

app.use('/api/v1/', router);
artistsRoutes(router);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
