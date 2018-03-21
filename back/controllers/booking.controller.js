const Booking        = require('../models/Booking');
const Experience  = require('../models/Experience');
const User        = require('../models/User');

exports.patchBooking = (req, res, next) => {
  Booking.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(booking => res.status(200).json(booking))
  .catch(err => res.status(500).send(err));
}

exports.deleteBooking = (req, res, next) => {
  Booking.findByIdAndRemove(req.params.id)
  .then(booking => res.status(200).json(booking))
  .catch(err => res.status(500).send(err));
}

exports.addBooking = (req, res, next) => {
  const newBooking = new Booking({
  experienceID  :   req.param.id,
  _creator      :   req.user._id,
  passengers    :     [{ 
    name  :   req.body.name,
    age   :   req.body.age,
    sex   :   req.body.sex,
    email :   req.body.email
  }],
  startDate     :   req.body.startDate,
  endDate       :   req.body.endDate
  });

  newBooking.save()
  .then(booking => res.status(201).json(booking))
  .catch(err => res.status(500).send(err));
}
