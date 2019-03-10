import express from 'express';
const albumRouter = express.Router();

albumRouter
    .get('api/v1/albums', (req, res) => {
        res.json();
    })
    .get('api/v1/album/search/', (req, res) => {
        res.json();
    });
