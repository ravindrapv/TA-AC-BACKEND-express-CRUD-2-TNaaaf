var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    title:{type:String,requerd:true},
    description:String,
    tags:[String],
    author:String,
    phoneNumber:Number,
    likes:Number
},{timestamps:true});

var Blog = mongoose.model('Blog',userSchema);

module.exports = Blog;