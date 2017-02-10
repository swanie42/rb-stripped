const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user:      { type : mongoose.Schema.ObjectId, ref: 'User', required: true },
    firstName: { type: String },
    lastName:  { type: String },
    phone:     { type: Number },
    address:   { type: Number },
    created:   { type: Date, default: Date.now, set: () => this.securedField },
});

module.exports = mongoose.model('Profile', ProfileSchema, 'profiles');
