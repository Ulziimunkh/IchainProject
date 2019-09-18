var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var OrgSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  orgId: {
    type:String,
    required:true,
    trim:true
  },
  name:{
    type:String,
    required:true,
    trim:true
  },
  nationality:{
    type:String,
    required:true,
    trim:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  address:{
    type:String,
    required:true,
    trim:true
  },
  contactNumber:{
    type:String,
    required:true,
    trim:true
  },
  isActive:{type:Boolean, default:1},
  createdDate: { type: Date, default: Date.now }
});
var Org = mongoose.model('Organization', OrgSchema);

module.exports = Org;
