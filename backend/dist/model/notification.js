"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
    archived: {
        type: Boolean,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    }
});
exports.default = mongoose_1.default.model('Notification', Notification, 'notifications');
//# sourceMappingURL=notification.js.map