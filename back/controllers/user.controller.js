const User                  = require('../models/User')
const express               = require('express');
const router                = express.Router();
const Experience            = require('../models/Experience')
const multer                = require ('multer');
const upload                = multer  ({  dest: './public/uploads'});
const { ensureLoggedIn }    = require ('connect-ensure-login');
const bcrypt                = require ('bcrypt');
const salt                  = bcrypt.genSaltSync(10);

exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).send(err));
}

exports.patchUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).send(err));
}

exports.fetchUser = (req, res, next) => {
    User.findById(req.user._id)
    .populate('favItems')
    .populate('bookings')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).send(err));
}
  
