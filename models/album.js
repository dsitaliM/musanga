import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const AlbumModel = new Schema({
    title: { type: String },
    image: { type: String },
    songs: [{ type: mongoose.Schema.ObjectId, ref: 'Song' }]
});

export default mongoose.model('Album', AlbumModel);
//export default AlbumModel;
