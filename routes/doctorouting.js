var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/doctor.model.js');
const { KeyGenerator } = require('../keyGeneration/KeyGenerator')

/* GET ALL Doctors */
router.get('/', function (req, res, next) {
  Doctor.find().populate('organization', 'name').exec(function(err, products){
    if (err) return next(err);
    console.log(products);
    res.json(products);
  })
});

/* GET SINGLE Doctor BY ID */
router.get('/:id', function (req, res, next) {
    Doctor.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Doctor */
router.post('/', function (req, res, next) {
    let doctor = req.body;
    try {
        //let keyGen = new KeyGenerator();
        //doctor.publicKey = keyGen.getPublicKey();
        //doctor.privateKey = keyGen.getPrivateKey();
    } catch (error) {
        console.log('doctorouting: Doctor key generation part:', err);
    }
    console.log('Doctor=====>', doctor)
    Doctor.create(doctor, function (err, post) {
        if (err) {
            console.log('save error log--->', err);
            return next(err);
        }
        res.json(post);
    });
});

/* UPDATE Doctor */
router.put('/:id', function (req, res, next) {
    Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Doctor */
router.delete('/:id', function (req, res, next) {
    Doctor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
