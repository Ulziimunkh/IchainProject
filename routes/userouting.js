var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const passport = require("passport");
const _ = require('lodash');
const jwtHelper = require('../config/jwtHelper');
const { KeyGenerator } = require("../keyGeneration/KeyGenerator");
const User = mongoose.model("User");


/* GET ALL Users */
router.get("/", function(req, res, next) {
  console.log("Retreiving user===>");
  User.find(function(err, products) {
    if (err) return next(err);
    console.log("list of data user-->", products);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.get("/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post("/register", function(req, res, next) {
  console.log("User Body=====>", req.body);
  let temp = req.body;
  try {
    let keyGen = new KeyGenerator();
    var user = new User({
      firstName: temp.firstName,
      lastName: temp.lastName,
      email: temp.email,
      publicKey: keyGen.getPublicKey(),
      privateKey: keyGen.getPrivateKey()
    });
    user.setPassword(temp.password);
  } catch (error) {
    console.log("userouting: User key generation part:", err);
  }
  console.log("User=====>", user);
  User.create(user, function(err, res) {
    if (!err) {
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        token: token,
        res: res
      });
    } else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    }
    //res.json(post);
  });
});

/* UPDATE User */
router.put("/:id", function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete("/:id", function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get("/home", jwtHelper.verifyJwtToken, function(req, res, next) {
  console.log('profile---->');
  User.findOne({ _id: req._id},
    (err, user) => {
        if (!user)
            return res.status(404).json({ status: false, message: 'User record not found.' });
        else
            return res.status(200).json({ status: true, user : _.pick(user,['firstName','email']) });
    }
);
});

router.post("/auth", function(req, res, next) {
      // call for passport authentication
      passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "currentUser": user, "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
});

module.exports = router;
