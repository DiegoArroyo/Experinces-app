const mongoose              = require("mongoose");
const Schema                = mongoose.Schema;

const userSchema = new Schema({
  username: { type:String },
  password: { type:String, required:true },
  email:    { type:String, required:true },
  roles:    {
    type: String,
    enum: ["USER", "ENTERPRISE", "ADMIN"],
    default:"USER"
  }
},
{
  timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
  }
});

module.exports = require("mongoose").model("User", userSchema);