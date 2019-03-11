import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const SongModel = new Schema({
    track: { type: String }
    // artist: { type: mongoose.Schema.ObjectId, ref: 'Artist' }
});

export default mongoose.model('Song', SongModel);
