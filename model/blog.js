const mongoose = require('mongoose')
const {blogSchema} = require('../database/model_schema')
// Blog is what i created on the mongoDB which is called blogs on the DB
// Blog is the singular name of blogs on the database blogs was created first
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;