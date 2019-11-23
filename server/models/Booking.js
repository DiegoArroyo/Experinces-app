const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const bookingSchema = new Schema({
  experienceID  :   { type: Schema.Types.ObjectId, ref: 'Experience' },
  _creator      :   { type: Schema.Types.ObjectId, ref: 'User' },
  passengers    :     [{ 
    name    :   { type: String  },
    age     :   { type: Number  },
    sex     :   { type: String  },
    email   :   { type: String  }
  }],
  startDate     :   { type: Date  },
  endDate       :   { type: Date  }
});

module.exports = require('mongoose').model('Booking', bookingSchema);