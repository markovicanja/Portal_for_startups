import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Ad = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
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
    expireDate: {
        type: String,
        required: true
    },
    expireTime: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    sendTo: {
        type: String,
        required: true
    },
    startups: {
        type: Array,
        required: true
    },
    businessType: {
        type: String,
        required: true
    }, 
    deleted: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Ad', Ad, 'ads');