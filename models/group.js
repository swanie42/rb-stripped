const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
    label: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Group', GroupSchema, 'groups');
