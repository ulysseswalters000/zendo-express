var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');
var cors = require('cors');


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/app')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
const landing = require('./routes/api/landing');
const contact = require('./routes/api/contact');
const pricing = require('./routes/api/pricing');
// - 'routes in single quotes refer to actual routes'
app.use('/', landing);
app.use('/contact', contact);
app.use('/pricing', pricing);

// Handle productionTip
if(process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public'));

  //Handle routes
  app.get(/.*/, (req, res) => res.sendFile(__dirname+ '/public/index.html'));
}




// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
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
