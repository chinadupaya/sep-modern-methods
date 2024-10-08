var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser');
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;