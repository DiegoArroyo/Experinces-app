const Experience = require('../models/Experience');
const User       = require('../models/User');


exports.ownedItems = function(req, res, next) {
  Ticket.find({creator:req.user._id})
  .populate('_creator')
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.deleteItem = (req, res, next) => {
  Experience.findByIdAndRemove(req.params.id)
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}
//patch route for photo update


exports.patchItem = (req, res, next) => {
  Experience.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.fetchItem = (req, res, next) => {
 Experience.findById(req.params.id)
 .then(experience => res.status(200).json(experience))
 .catch(err => res.status(500).send(err));
}

exports.postItem = (req, res, next) => {
  const newExperience = new Experience({
    _creator:     req.user._id,
    title:        req.body.title,
    description:  req.body.description,
    price:        req.body.price,
    pictures:     [`/uploads/${req.file.filename}`],
    includes:     req.body.includes,
    places:       req.body.places,
    duration:     req.body.duration,
    location:     req.body.location,
  });

  newExperience.save()
  .then(experience => res.status(201).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.getItems = (req, res, next) => {
  Experience.find()
  .then(experiences => res.status(200).json(experiences))
  .catch(err => res.status(500).send(err));
}