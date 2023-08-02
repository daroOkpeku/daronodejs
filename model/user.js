const mongoose = require('mongoose');
const {UserShema} = require('../database/user_schema')

const User = mongoose.model('User', UserShema);
module.exports = User;