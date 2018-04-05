require('dotenv').config()
const express       = require('express');
const path          = require('path');
const favicon       = require('serve-favicon');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const passport      = require('passport');
const session       = require("express-session");
const cors          = require("cors");

const experience  = require('./routes/experience');
const auth        = require('./routes/auth')
const user        = require('./routes/user');
const booking     = require('./routes/booking');

const app = express(); 

const mongoose      = require('mongoose');
mongoose.connect(process.env.mongoURL)
.then(console.log(`Connected to ${process.env.mongoURL}`))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Session
app.use(session({
  secret: "experience-local-app",
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

// Passport Config
require('./helpers/passport')(passport,app);


app.use('/api/experience', experience);
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/booking', booking);

app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
