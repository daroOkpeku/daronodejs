const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // this is the database schema responsable for the 
    title:{
        type:String,
        required:true,
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = {
    blogSchema:blogSchema   
}