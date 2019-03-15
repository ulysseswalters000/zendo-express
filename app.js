var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');
var cors = require('cors');
var history = require('connect-history-api-fallback');



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


var app = express();



// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
const contact = require('./routes/api/contact');
// - 'routes in single quotes refer to actual routes'
app.use('/contact', contact);
app.use(history());


// Handle production
if(process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public'));

  //Handle routes
  // matches any route that does not exist to index.html
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
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
  res.render(err);
});

module.exports = app;
