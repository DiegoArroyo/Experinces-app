const LocalStrategy      = require('passport-local').Strategy;
const bcrypt             = require('bcrypt');
const User               = require('../models/User');

module.exports = function (passport,app) {

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

  passport.use(new LocalStrategy((username, password, next) => {
    console.log(username,password)
    User.findOne({ username }, (err, user) => {
      console.log(user)
      if (err) { return next(err); }
      if (!user) { return next(null, false, { message: "Incorrect username" }); }
      if (!bcrypt.compareSync(password, user.password)) { return next(null, false, { message: "Incorrect password" }); }

    return next(null, user);
    });
  }));
 
  app.use(passport.initialize());
  app.use(passport.session());

}
