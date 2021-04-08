"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Ad', Ad, 'ads');
//# sourceMappingURL=ad.js.map