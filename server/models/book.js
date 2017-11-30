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
        type: String,
        required: true
    },
    'pages': {
        type: String,
        required: true
    },
    'image': {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('simplonBooks', newBook);