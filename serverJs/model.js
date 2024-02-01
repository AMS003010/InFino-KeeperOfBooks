const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    borrowed: {
        type: String,
        default: null
    },
    borrowed_on: {
        type: Number,
        default: null
    }
});

const DataModel = mongoose.model('flask_data',userSchema);

module.exports = {DataModel};