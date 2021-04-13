import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Discussion = new Schema({
    title: {
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
    publishDate: {
        type: String,
        required: true
    },
    publishTime: {
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
    archived: {
        type: Boolean,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Discussion', Discussion, 'discussions');