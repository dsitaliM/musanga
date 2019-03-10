import express from 'express';
const artistRouter = express.Router();

artistRouter
    .get('api/v1/artists', (req, res) => {
        res.json();
    })
    .get('api/v1/artists/search/', (req, res) => {
        res.json();
    });
