var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{type:String,requerd:true},
    description:String,
    age:Number,
    phoneNumber:Number,
    email:{type:String,requerd:true}
},{timestamps:true});

var Blog = mongoose.model('Blog',userSchema);

module.exports = Blog;