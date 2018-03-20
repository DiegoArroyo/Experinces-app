const express        = require('express');
const router         = express.Router();
const User           = require('../models/User');
const passport       = require('passport');
const bcrypt         = require('bcrypt');

exports.signup = (req,res,next) => {
  if ( !req.body.username || !req.body.password || !req.body.email ) {
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }

  User.findOne({ email: req.body.email }, 'email', (err, user) =>{
    if(user !== null) {
      res.status(400).json({message: 'This email is already registered'});
      return;
    }

    let hashPass  = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9), null);
    let newUser   = new User({
      username: req.body.username,
      password: hashPass,
      email: req.body.email
    });

    newUser.save()
    .then(user => {
      req.login(user, (err) => {
        if (err) { return res.status(500).json({ message: "Something went wrong" }); }
        res.status(200).json(req.user);
      });
    }) 
    .catch(err => res.status(400).json(err))
  });
}

exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) { return res.status(500).json({ message: "Something went wrong" }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
};

exports.signout = (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Success" });
}

exports.signedin = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
}

// exports.userData = (req, res, next) => {
//   if(req.user){
//     User.findById(req.user._id)
//       .populate('favItems')
//       .then(user => res.status(200).json(user))
//       .catch(e => res.status(500).json(e))
//   }
// }

