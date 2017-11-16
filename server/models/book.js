import mongoose from 'mongoose';

const newBook = new mongoose.Schema({
    'title': {
        type: String,
        required: true
    },
    'author': {
        type: String,
        required: true
    },
    'release_date': {
        type: Number,
        required: true
    },
    'pages': {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('simplonBooks', newBook);