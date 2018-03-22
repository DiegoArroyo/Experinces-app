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
},
{
    username  : "Diego",
    password  : bcrypt.hashSync("hola", salt),
    email     : "arroyo@gmail.com",
    avatar    : "/images/default-profile.png",

},
{
    username  : "Andrei",
    password  : bcrypt.hashSync("hola", salt),
    email     : "andrei@gmail.com",
    avatar    : "/images/default-profile.png",
}
];

User.create(user, function(err, result){
    if(err) console.log("error");
    console.log("lo lograste!", result);
    mongoose.connection.close();
});