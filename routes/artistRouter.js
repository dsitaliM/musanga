import express from 'express';
import ArtistModel from '../models/artist';
const artistRouter = express.Router();

artistRouter
    .get('/artists', (req, res) => {
        ArtistModel.find({}, (err, artists) => {
            res.json(artists);
        });
        //res.send("Yep it's working");
    })
    .post('/artists/', (req, res) => {
        let artist = new ArtistModel(req.body);
        artist.save();
        res.status(201).send(artist);
    })
    .get('/artists/search/:artistId', (req, res) => {
        ArtistModel.findById(req.params.artistId, (err, artist) => {
            res.json(artist);
        });
    })
    .put((req, res) => {
        ArtistModel.findById(req.params.artistId, (err, artist) => {
            //TODO
            artist.save();
            res.json(artist);
        });
    })
    .delete((req, res) => {
        ArtistModel.findById(req.params.artistId, (err, artist) => {
            artist.remove(err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('removed');
                }
            });
        });
    });

export default artistRouter;
