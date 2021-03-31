import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const News = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    },
    selectedStartups: {
        type: Array,
        required: true
    },
    selectedInvestors: {
        type: Array,
        required: true
    }
});

export default mongoose.model('News', News, 'news');