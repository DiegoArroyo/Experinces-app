const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/experience-local-app')
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(9);


const user = [
{
    username  : "Experiences",
    password  : bcrypt.hashSync("hola", salt),
    email     : "experiencies@gmail.com",
    avatar    : "/images/default-profile.png",
    role      : "ENTERPRISE"
},
{
    username  : "Diego",
    password  : bcrypt.hashSync("hola", salt),
    email     : "arroyo@gmail.com",
    avatar    : "/images/default-profile.png",
    role      : "ADMIN"

}
];

User.create(user, function(err, result){
    if(err) console.log("error");
    console.log("lo lograste!", result);
    mongoose.connection.close();
});