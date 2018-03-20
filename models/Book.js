const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const bookSchema = new Schema({
  experienceID: { type: Schema.Types.ObjectId, ref:'Experience' },
  creator: { type: Schema.Types.ObjectId, ref:'User' },
  persons:     [{ 
    name:   { type: String  },
    age:    { type: Number  },
    sex:    { type: String  },
    email:  { type: String  }
  }],
  startDate: Date,
  endDate:Date
});

module.exports = require('mongoose').model('Book', bookSchema);