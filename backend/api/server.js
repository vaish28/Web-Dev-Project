// 'use strict';
// const cors = require('cors');
// var express = require('express'),

//   app = express(),
//   port = process.env.PORT || 3000,


//   User = require('./models/userModel'),
//   bodyParser = require('body-parser'),
//   jsonwebtoken = require("jsonwebtoken");

// const mongoose = require('mongoose');
// const option = {
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     reconnectTries: 30000
// };

// app.use(cors({
//   origin: 'http://localhost:3001',
//   credentials: true
// }));


// const mongoURI = process.env.MONGODB_URI;
// mongoose.connect('mongodb://127.0.0.1:27017/webProject').then(function(){
//     //connected successfully
//     console.log("I have connected successfully");
// }, function(err) {
//     //err handle
//     console.log(err)
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
//       if (err) req.user = undefined;
//       req.user = decode;
//       next();
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// });
// var routes = require('./route/userRoute');
// routes(app);

// app.use(function(req, res) {
//   res.status(404).send({ url: req.originalUrl + ' not found' })
// });

// app.listen(port);

// console.log(' RESTful API server started on: ' + port);

// module.exports = app;