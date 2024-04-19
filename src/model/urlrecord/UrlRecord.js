const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    fullURL: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    shortURL: {
        type: String,
        required: true,
        trim: true,
    },
    clicks: { type: Number, default: 0 }
}, {
        timestamps: true
    })



const UrlRecord = mongoose.model('UrlRecord', urlSchema)

module.exports = UrlRecord;