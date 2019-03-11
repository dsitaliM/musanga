import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const AlbumModel = new Schema({
    title: { type: String },
    image: { type: String },
    songs: [
        {
            track: { type: String }
        }
    ]
});

export default mongoose.model('Album', AlbumModel);
//export default AlbumModel;
