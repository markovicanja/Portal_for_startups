"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Survey = new Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: [{
                question: {
                    type: String,
                    required: true
                },
                answers: {
                    type: [{
                            answer: {
                                type: String,
                                required: true
                            },
                            counter: {
                                type: Number,
                                required: true
                            }
                        }],
                    required: true
                }
            }],
        required: true
    },
    public: {
        type: Boolean,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    filled: {
        type: [{
                startup: {
                    type: String,
                    required: true
                },
                answers: {
                    type: [String],
                    required: true
                }
            }],
        required: true
    },
});
exports.default = mongoose_1.default.model('Survey', Survey, 'surveys');
//# sourceMappingURL=survey.js.map