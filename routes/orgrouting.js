var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Organization = require('../models/organization.model.js');
const {KeyGenerator} = require('../keyGeneration/KeyGenerator')

/* GET ALL Organizations */
router.get('/', function(req, res, next) {
  Organization.find(function (err, products) {
    if (err) return next(err);
    console.log(products);
    res.json(products);
  });
});
/* GET Count Organizations */
router.get('/count', function(req, res, next) {
Organization.count(function (err, counts) {
  if (err) return next(err);
  res.json(counts);
});
});

/* GET SINGLE Organization BY ID */
router.get('/:id', function(req, res, next) {
  Organization.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Organization */
router.post('/', function(req, res, next) {
    console.log('Organization Body=====>', req.body)
    let org =  req.body;
    org._id = new mongoose.Types.ObjectId();
    try {
      Organization.create(org, function (err, post) {
        if (err){
          console.log('save error log--->', err);
          return next(err);
        }
      res.json(post);
    });
    } catch (error) {
      console.log('Save Organization eror---> ', error);
    }

});

/* UPDATE Organization */
router.put('/:id', function(req, res, next) {
  Organization.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Organization */
router.delete('/:id', function(req, res, next) {
  Organization.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
