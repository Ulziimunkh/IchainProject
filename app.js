require('./config/config');
require('./models/db');
require('./config/passportConfig');
var express = require("express");
var path = require("path");
const multer = require('multer');
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");

//var cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
var transactions = require("./routes/contractroutes");

var userouting = require("./routes/userouting");

var orgrouting = require("./routes/orgrouting");

var doctorouting = require("./routes/doctorouting");

var rsaKey = require("./keyGeneration/creatersa");
var app = express();



app.use(logger("dev"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
// uri
app.use(express.static(path.join(__dirname, "dist/Ichain")));
app.use("/", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/sign-in", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/sign-up", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/chainInfo", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/userList", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/data-entry", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/about", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/contact", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/home", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/organizations", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/orgEntry", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/registerDoctor", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/doctorList", express.static(path.join(__dirname, "dist/Ichain")));
app.use("/uploadDocument", express.static(path.join(__dirname, "dist/Ichain")));

app.use("/patientInfo", transactions);
app.use("/genKeyPair", rsaKey);
app.use("/user", userouting);
app.use("/org", orgrouting);
app.use("/doctor", doctorouting);


const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received successfully');
        return res.send({
          success: true
        })
      }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
