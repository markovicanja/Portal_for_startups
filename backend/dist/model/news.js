"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('News', News, 'news');
//# sourceMappingURL=news.js.map