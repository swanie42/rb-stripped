const EMAIL_ACCOUNT = 'CaseWilder99@gmail.com';
const EMAIL_PASSWORD = 'Turtle99';
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const User = require('./user');
const EMAILER = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ACCOUNT,
        pass: EMAIL_PASSWORD
    }
});

let NoteSchema = mongoose.Schema({
    user:     { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    scope:    { type: mongoose.Schema.ObjectId, ref: 'Scope', required: true },
    zone:     { type: mongoose.Schema.ObjectId, ref: 'Zone' },
    area:     { type: mongoose.Schema.ObjectId, ref: 'Area' },
    text:     { type: String, required: true },
    mentions: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    created:  { type: Number, default: Date.now, set: () => this.securedField }
});


NoteSchema.pre('save', function(next) {
    // console.log("running note pre save!");
    let note = this;
    // console.log("The note in note pre save", note);
    if (note.mentions) {

        // console.log("There are some mentions!")
        note.mentions.forEach((mention) => {
            User.findById(mention, (err, user) => {
                // console.log("The user from finding the mentions", user.email)
                emailReport({
                    subject: "You have a new mention on the Ready Board!",
                    email: user.email,
                    message: note.text,
                });
            });
        });
    }
    next();
});

function emailReport(payload) {
    EMAILER.sendMail({
        from: EMAIL_ACCOUNT,      // sender address
        to: payload.email,        // receiver
        subject: payload.subject, // Subject line
        text: payload.message,    // plaintext body
    }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

module.exports = mongoose.model('Note', NoteSchema, 'notes');
