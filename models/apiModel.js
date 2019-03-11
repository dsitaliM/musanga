import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const APIModel = new Schema({
    name: { type: String },
    photo: { type: String },
    albums: [
        {
            title: { type: String },
            image: { type: String },
            songs: [{ track: { type: String } }]
        }
    ]
});

export default mongoose.model('Artist', APIModel);
