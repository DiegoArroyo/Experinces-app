const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const experienceSchema = new Schema({
  // _creator:     { type: Schema.Types.ObjectId, ref:'User' },
  title:        { type: String, required: true },
  description:  { type: String, required: true },
  price:        { type: Number, required: true },
  picture:      { type: String, default: 'images/img-default.png'},
  passengers:     [{ 
    name:   { type: String  },
    age:    { type: Number  },
    sex:    { type: String  },
    email:  { type: String  }
  }],
  includes:     { type: String, required: true },
  places:       { type: Number, required: true },
  duration:     { type: String, required: true },
});

module.exports = require('mongoose').model('Experince', experienceSchema);