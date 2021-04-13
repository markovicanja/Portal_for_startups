"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
    },
    replays: {
        type: [{
                fullName: {
                    type: String,
                    required: true
                },
                replay: {
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
                }
            }],
        required: true
    }
});
exports.default = mongoose_1.default.model('Discussion', Discussion, 'discussions');
//# sourceMappingURL=discussion.js.map