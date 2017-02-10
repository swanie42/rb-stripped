const EMAIL_ACCOUNT = 'CaseWilder99@gmail.com';
const EMAIL_PASSWORD = 'Turtle99'
const nodemailer = require('nodemailer');
const EMAILER = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ACCOUNT,
        pass: EMAIL_PASSWORD
    }
});

// var redis = require("redis"),
//     client = redis.createClient();

var randomstring = require("randomstring");

var User = require('../models/user'),
    Users = {
        read: (req, res) => {
            User.find()
                .select('-password')
                .exec((err, users) => {
                    if(!Users.error(err, res)) {
                        res.send(users);
                    }
                });
        },
        update: (req, res) => {
            User.findByIdAndUpdate(req.params.id, req.body, { new: true })
                .select('-password')
                .populate('group','label')
                .exec((err, user) => {
                    if(!Users.error(err, res)) {
                        if( req.session.user._id === user._id ) {
                            req.session.user = user;
                        }
                        res.send(user);
                    }
                });
        },
        error: (err, res) => {
            if(err) {
                console.error('[models.User.error]:'.bold.red, err);
                res.status(500).send(err);
                return true;
            }
        },
        middlewares: {
            create: (req, res, next) => {
                if( req.session.user && req.session.user.admin ) {
                  var token = randomstring.generate(9);
                  client.set(req.session.user.name, token);

                  var payload = {
                    email: req.body.email,
                    subject: "You are invited to ReadyBoard!",
                    text: "Insert HyperLink Here"
                  };

                  emailReport(payload);

                    req.body.password = token;
                    next();
                } else {
                    res.status(403).send({ message: 'Forbidden' });
                }
            }
        }
    };

function emailReport(payload) {
        EMAILER.sendMail({
            from: EMAIL_ACCOUNT, // sender address
            to: payload.email, //receiver
            subject: payload.subject, // Subject line
            text: payload.message, // plaintext body

        }, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }

module.exports = Users;
