import express from 'express';
import APIModel from '../models/apiModel';

const artistRouter = express.Router();

artistRouter
    .get('/artists/', (req, res) => {
        APIModel.find({}, (err, artists) => {
            if (err) {
                res.send(err);
            }
            res.json(artists);
        });
    })
    .post('/artists/create/', (req, res) => {
        let artist = new APIModel(req.body);
        artist.save((err, artist) => {
            if (err) {
                res.send(err);
            }
            res.status(201).send(artist);
        });
    })
    .get('/artists/search/:artistId/', (req, res) => {
        APIModel.findById(req.params.artistId, (err, artist) => {
            if (err) {
                res.send(err);
            }
            res.json(artist);
        });
    })
    // .get('/artists/search/:artistName/', (req, res) => {
    //     APIModel.findById(req.params.artistId, (err, artist) => {
    //         res.json(artist);
    //     });
    // })
    .put('/artists/update/:artistId', (req, res) => {
        APIModel.findOneAndUpdate(
            { _id: req.params.artistId },
            req.body,
            { new: true },
            (err, artist) => {
                if (err) {
                    res.send(err);
                }
                res.json(artist);
            }
        );
    })
    .delete('/artists/delete/:artistId', (req, res) => {
        APIModel.remove({ _id: req.params.id }, (err, artist) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Artist successfully deleted' });
        });
    });

export default artistRouter;
