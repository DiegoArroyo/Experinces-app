const User           = require('../models/User');
const bcrypt         = require('bcrypt');

exports.signUp = (req,res,next) => {
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
        return res.status(200).json(req.user);
      });
    }) 
    .catch(err => res.status(400).json(err))
  });
}

exports.signIn = (req, res, next)=>{
  req.login(user, (err) => {
    if (err) { return res.status(500).json({ message: "Something went wrong" }); }
    return res.status(200).json(req.user);
  });
}

exports.signOut = (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
}

exports.signedIn = (req, res, next) => {
  res.status(200).json(req.user);
}

exports.private = (req, res, next) => {
  res.status(200).json(req.user);
} 