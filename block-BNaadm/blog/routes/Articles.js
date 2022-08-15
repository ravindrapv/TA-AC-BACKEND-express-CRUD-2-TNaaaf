var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Blog.find({},(err,articles) => {
    if(err) return next(err);
    res.render('blogApp.ejs',{articles});
  })
});

//creating articals form
router.get('/new',(req,res,next) => {
    res.render('blogForm.ejs')
});

//create articals
router.post('/',(req,res,next) => {
   Blog.create(req.body,(err,createBolg) => {
    if(err) return next(err);
    res.redirect('/Articles')
   })
});

//fatch singel artical
router.get('/:id',(req,res,next) => {
  var id = req.params.id;
  Blog.findById(id,(err,article) => {
    console.log(article);
    if(err) return next(err);
    res.render('blogDetailes',{article})
  })
});

//edit artical
router.get('/:id/edit',(req,res) => {
  var id = req.params.id;
  Blog.findById(id,(err,article) => {
    if(err) return next(err);
    res.render('editArticleForm',{article});
  })
});


router.post('/:id',(req,res) => {
  var id = req.params.id;
   Blog.findByIdAndUpdate(id,req.body,(err,updateData) => {
    article.tags = article.tags.join(" ")
    if(err) return next(err,updateData);
    res.redirect(`/blogDetailes/` + id);
   })
});
1
router.get('/:id/delete',(req,res,next) => {
  var id = req.params.id;
  Blog.findByIdAndDelete(id,(err,article) =>{
    if(err) return next(err);
    res.redirect('/Articles');
  })
})
//inc likes
router.get('/:id/likes',(req,res) => {
  var id = req.params.id;
  Blog.findByIdAndUpdate(id,{$inc:{likes: 1}},(err,article) => {
    res.redirect('/Articles/' + id)
  })
})
module.exports = router;
