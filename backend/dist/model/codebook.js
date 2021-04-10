"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Codebook', Codebook, 'codebooks');
//# sourceMappingURL=codebook.js.map