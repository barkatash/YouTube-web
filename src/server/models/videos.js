const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Video = new Schema({
    image : {
        type: String
    },
    video : {
        type: String
    },
    title : {
        type: String
    },
    duration : {
        type: String
    },
    visits : {
        type: String
    },
    uploadDate : {
        type: String
    },
    description : {
        type: String
    },
    likes : {
        type: Number
    },
    categoryId : {
        type: Number[]
    },
});
module.exports = mongoose.module('Video', Video);