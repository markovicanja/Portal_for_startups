import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
                type: [String],
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

export default mongoose.model('Survey', Survey, 'surveys');