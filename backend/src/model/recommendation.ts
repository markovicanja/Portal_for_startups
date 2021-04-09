import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Recommendation = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model('Recommendation', Recommendation, 'recommendations');