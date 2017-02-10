const SALT = 10;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    group:    { type : mongoose.Schema.ObjectId, ref: 'Group' },
    profile:  { type : mongoose.Schema.ObjectId, ref: 'Profile' },
    name:     { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin:    { type: Boolean, required: true, default: false },
    enabled:  { type: Boolean, required: true, default: true },
    created:  { type: Date, default: Date.now, set: () => this.securedField },
});

// hash passwords before saving them
UserSchema.pre('save', function(next) {

    let user = this;


    // only hash the password if it has been modified (or is new)
    if ( user.isNew || user.isModified('password') ) {
        // generate a salt
        bcrypt.genSalt(SALT, (saltErr, salt) => {
            if (saltErr) {
                return next(saltErr);
            }
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, (hashErr, hash) => {
                if (hashErr) {
                    return next(hashErr);
                }
                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.pre('findOneAndUpdate', function(next){
  console.log("running presave for find one and update!")
  var query = this.getQuery();  // contains id
  var update = this.getUpdate();
  // only hash the password if it has been modified (or is new)
  if ( update.$set.password ) {
      // generate a salt
      bcrypt.genSalt(SALT, (saltErr, salt) => {
          if (saltErr) {
              return next(saltErr);
          }
          // hash the password using our new salt
          bcrypt.hash(update.$set.password, salt, (hashErr, hash) => {
              if (hashErr) {
                  return next(hashErr);
              }
              // override the cleartext password with the hashed one
              update.$set.password= hash;
                this.findOneAndUpdate({}, { $set: { password: hash } });
              next();
          });
      });
  } else {
      next();
  }
})

UserModel = mongoose.model('User', UserSchema, 'users');

module.exports = UserModel;
