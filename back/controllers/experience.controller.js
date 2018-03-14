const Experience = require('../models/Experience');

exports.deleteExperince = (req, res, next) => {
  Experience.findByIdAndRemove(req.params.id)
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.patchExperience = (req, res, next) => {
  Experience.findByIdAndUpdate(req.params.id, req.body)
  .then(experience => res.status(200).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.postExperience = (req, res, next) => {
  const newExperience = new Experience({
    title:        req.body.title,
    description:  req.body.description,
    price:        req.body.price,
    pictures:     req.body.pictures,
    passengers:     [{ 
      name:   req.body.name,
      age:    req.body.age,
      sex:    req.body.sex,
      email:  req.body.email
    }],
    places:        req.body.places,
    duration:     req.body.duration
  });

  newExperience.save()
  .then(experience => res.status(201).json(experience))
  .catch(err => res.status(500).send(err));
}

exports.getExperience = (req, res, next) => {
  Experience.find()
  .then(experiences => res.status(200).json(experiences))
  .catch(err => res.status(500).send(err));
}