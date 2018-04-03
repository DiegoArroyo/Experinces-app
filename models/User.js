const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username    :   { type:String, required:true },
  password    :   { type:String, required:true },
  email       :   { type:String, required:true },
  avatar      :   { type:String, default: "/images/default-profile.png" },
  favItems    :  [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
  bookings    :  [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  role        :  {
    type      : String,
    enum      : ["USER", "ENTERPRISE", "ADMIN"],
    default   : "USER"
  }
},
{
  timestamps  :  {
    createdAt : "created_at",
    updatedAt : "updated_at"
  }
});

module.exports = require("mongoose").model("User", userSchema);