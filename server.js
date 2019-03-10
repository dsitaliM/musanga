import express from 'express';
const app = express();
const port = process.env.PORT || 5656;

app.get('api/v1/artists', (req, res) => {
    //get artists
});
