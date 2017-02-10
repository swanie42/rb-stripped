const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    url:  { type: String, required: true },

    created: { type: Date, default: Date.now, set: () => this.securedField },
    caption: { type: String, default: '' },
});

module.exports = mongoose.model('Image', ImageSchema, 'images');
