import express from 'express';
import AlbumModel from '../models/album';
const albumRouter = express.Router();

albumRouter
    .get('/albums', (req, res) => {
        AlbumModel.find({}, (err, albums) => {
            res.json(albums);
        });
        //res.send("Yep it's working");
    })
    .post('/albums', (req, res) => {
        let album = new AlbumModel(req.body);
        album.save();
        res.status(201).send(album);
    })
    .get('/album/search/:albumId', (req, res) => {
        AlbumModel.findById(req.params.albumId, (err, album) => {
            res.json(album);
        });
    })
    .put((req, res) => {
        AlbumModel.findById(req.params.albumId, (err, album) => {
            //TODO
            album.save();
            res.json(album);
        });
    })
    .delete((req, res) => {
        AlbumModel.findById(req.params.albumId, (err, album) => {
            album.remove(err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('removed');
                }
            });
        });
    });

export default albumRouter;
