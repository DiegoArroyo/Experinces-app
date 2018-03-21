const Experience  = require('../models/Experience');
const User        = require('../models/User');
const Booking     = require('../models/Booking');

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

exports.addFavorite = (req, res, next) => {
  console.log(req.user)
  console.log(req.params.id)
  User.findByIdAndUpdate(req.user._id, {$push: {favItems: req.params.id}})
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.addPhoto = (req, res, next) => {
  Experience.findByIdAndUpdate(req.params.id, {$push: {pictures:`/uploads/${req.files[0].filename}`}}, {new: true})
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.patchItem = (req, res, next) => {
  Experience.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.deleteItem = (req, res, next) => {
  Experience.findByIdAndRemove(req.params.id)
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.fetchItem = (req, res, next) => {
 Experience.findById(req.params.id)
 .populate('_creator')
 .then(experience => res.status(200).json(experience))
 .catch(err => res.status(500).send(err));
}

exports.postItem = (req, res, next) => {
  const newExperience = new Experience({
    _creator    :   req.user._id,
    category    :   req.body.category,
    title       :   req.body.title,
    description :   req.body.description,
    price       :   req.body.price,
    pictures    :   [`/uploads/${req.file.filename}`],
    includes    :   req.body.includes,
    places      :   req.body.places,
    duration    :   req.body.duration,
    location    :   req.body.location,
  });

  newExperience.save()
  .then(experience => res.status(201).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.getItems = (req, res, next) => {
  Experience.find({})
  .populate('_creator')
  .then(experiences => res.status(200).json(experiences))
  .catch(err => res.status(500).send(err));
}