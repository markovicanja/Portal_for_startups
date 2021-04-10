import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Codebook = new Schema({
    data: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateFrom: {
        type: String,
        required: true
    },
    dateTo: {
        type: String,
        required: true
    }
});

export default mongoose.model('Codebook', Codebook, 'codebooks');