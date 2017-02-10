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
    bcrypt = require('bcryptjs'), // used for encryption
    mongoose = require('mongoose'),
    errors = { // response errors
        general: {
            status: 500,
            message: 'Backend error'
        },
        users: {
            duplicate: {
                status: 409,
                message: 'User already exists!'
            }
        },
        login: {
            status: 403,
            message: 'Invalid username or password'
        }
    },
    messages = {
        login: {
            status: 200,
            message: 'Login success'
        },
        register: {
            status: 200,
            message: 'Register success'
        }
    };



module.exports = {
    logout: (req, res) => {
        req.session.reset(); // clears the users cookie session
        res.redirect('/');
    },
    login: (req, res) => {
        if( !req.body.email || !req.body.password ) {
            return res.status(403).send(errors.login);
        }

        User.findOne({ email: req.body.email.toLowerCase() })
            .populate('group','label')
            .exec((err, user) => {
                // If there was an error in mongo, send back a 500 response (general server error) to the Frontend
                if (err) {
                    console.error('User login, MongoDB error:'.bold.red, err);
                    res.status(500).send(errors.general);
                }
                if (!user) {
                    // If there was no user found for the given user name, send back a 403 response (forbidden)
                    res.status(403).send(errors.login);
                } else {
                    console.info('auth.login.user =', user);
                    // If we got this far, then we know that the user exists. But did they put in the right password?
                    bcrypt.compare(req.body.password, user.password, (bcryptErr, matched) => {
                        if (bcryptErr) {
                            console.error('Error decrypting password:', bcryptErr);
                            res.status(500).send(errors.general);
                        } else if (!matched) {
                            console.warn('Passwords do not match for:', user);
                            res.status(403).send(errors.login);
                        } else {
                            req.session.user = user;
                            res.send(messages.login); // send a success message
                        }
                    });
                }
            });
    },
    updatePassword: (req, res) => {
      console.log("running update password")
      console.log("the req.session.user", req.session.user)

      User.findOneAndUpdate({_id:req.session.user}, {$set:{password:req.body.password}}, {new: true}, (err, doc)=>{
        if(err){
          console.log("Error alert: ", err);
            res.status(500).send(errors.general);
        }
        else{
          res.send("Password Changed!")
        }

      })


    },
    passwordPage: (req, res) => {
      client.get(req.params.id, (err, reply)=>{
        // console.log("running redis get");
        console.log("the error", err);
        console.log("the reply", reply);

      })
      res.send("da password page!")
    },
    resetPassword: (req, res) => {

      var token = randomstring.generate(9);
      client.set(token, req.session.user.name);

      var payload = {
        email: req.body.email,
        subject: "You are invited to ReadyBoard!",
        text: "https://localhost/updatePassword/"+ token
      };

      emailReport(payload, res);


    },
    register: (req, res)=>{
      new User(req.body).save((err, user) => {
          if (err) {
              console.error('#ERROR#'.bold.red, err.message);
              if (err.code === 11000) {
                  res.status(errors.users.duplicate.status)
                      .send(errors.users.duplicate);
              } else {
                  res.status(errors.general.status)
                      .send(errors.general);
              }
          } else {
              req.session.user = user; // set the user in the session!
              res.send(messages.register); // send a success message
          }
      });
    },
    protect: (req, res, next) => {
        if ( req.session.user ) {
            next();
        } else {
            console.warn('Access denied!'.yellow.bold, req.session);
            res.redirect('/');
        }
    },
    admin: (req, res, next) => {
        if( req.session.user && req.session.user.admin ) {
            next();
        } else {
            res.status(403).send({ message: 'Forbidden' });
        }
    },
    session: (req, res) => {
        var user = Object.assign({}, req.session.user);
        delete user.password;
        res.send(user);
    }
};

function emailReport(payload, res) {
        EMAILER.sendMail({
            from: EMAIL_ACCOUNT, // sender address
            to: payload.email, //receiver
            subject: payload.subject, // Subject line
            text: payload.text, // plaintext body

        }, (error, info) => {
            if (error) {
              res.send(error)
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
            res.send("Message sent!")
        });
    }
