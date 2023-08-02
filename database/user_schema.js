const mongoose = require('mongoose')
const Schema = mongoose.Schema
// firstname, lastname, email, password,
const UserShema =  new Schema({
  firstname:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  }
},{timeseries:true});

module.exports = {UserShema:UserShema}