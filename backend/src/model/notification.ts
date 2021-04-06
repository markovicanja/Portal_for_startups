import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Notification = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
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
    type: {
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
    archived: {
        type: Boolean,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Notification', Notification, 'notifications');