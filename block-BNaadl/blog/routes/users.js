var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next()
});

router.get('/new',(req,res,next) => {
    res.render('blogForm.ejs')
});

router.post('/new',(req,res,next) => {
   Blog.create(req.body,(err,createBolg) => {
    if(err) return next(err,createBolg);
    res.redirect('/blogApp')
   })
});
module.exports = router;
