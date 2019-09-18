var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var DoctorSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  gender: {
    type: String},
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  specialistId: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization'},
  createdDate: { type: Date, default: Date.now }
});
var Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
