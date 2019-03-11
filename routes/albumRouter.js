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
        let album = new APIModel(req.body);
        album.save((err, album) => {
            if (err) {
                res.send(err);
            }
            res.status(201).send(album);
        });
    })
    .get('/albums/search/:albumId/', (req, res) => {
        APIModel.find({}, { albums: 1 }, (err, albums) => {
            if (err) {
                res.send(err);
            }
            albums.findById(req.params.albumId, (err, album) => {
                if (err) {
                    res.send(err);
                }
                res.json(album);
            });
        });
    })
    .put('/albums/update/:albumId', (req, res) => {
        APIModel.find({}, { albums: 1 }, (err, albums) => {
            if (err) {
                res.send(err);
            }
            albums.findOneAndUpdate(
                { _id: req.params.albumId },
                req.body,
                { new: true },
                (err, album) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(album);
                }
            );
        });
    })
    .delete('/albums/delete/:albumId', (req, res) => {
        APIModel.find({}, { albums: 1 }, (err, albums) => {
            if (err) {
                res.send(err);
            }
            albums.remove({ _id: req.params.albumId }, (err, album) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Artist successfully deleted' });
            });
        });
    });

export default albumRouter;
