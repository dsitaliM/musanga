import express from 'express';
import APIModel from '../models/apiModel';

const albumRouter = express.Router();

albumRouter
    .get('/albums/', (req, res) => {
        APIModel.find({}, { albums: 1 }, (err, albums) => {
            if (err) {
                res.send(err);
            }
            res.json(albums);
        });
    })
    .post('/albums/create/', (req, res) => {
        let artist = new APIModel(req.body);
        artist.save();
        res.status(201).send(artist);
    })
    .get('/albums/search/:albumId/', (req, res) => {
        APIModel.findById(req.params.artistId, (err, artist) => {
            res.json(artist);
        });
    })
    .get('/albums/search/:albumTitle/', (req, res) => {
        APIModel.findById(req.params.artistId, (err, artist) => {
            res.json(artist);
        });
    })
    .put('/albums/update/:artistId', (req, res) => {
        APIModel.findById(req.params.artistId, (err, artist) => {
            //TODO
            artist.save();
            res.json(artist);
        });
    })
    .delete('/albums/delete/:albumId', (req, res) => {
        APIModel.findById(req.params.artistId, (err, artist) => {
            artist.remove(err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('removed');
                }
            });
        });
    });

export default albumRouter;
