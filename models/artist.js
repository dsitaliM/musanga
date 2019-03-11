import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ArtistModel = new Schema({
    name: { type: String },
    photo: { type: String },
    albums: [{ type: mongoose.Schema.ObjectId, ref: 'Album' }]
});

export default mongoose.model('Artist', ArtistModel);
