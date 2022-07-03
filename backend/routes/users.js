var express = require('express');
var router = express.Router();
var userModel = require('../models/users');



/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

/* reister users listing. */
router.post('/register', async function(req, res, next) {
  let user = new userModel(req.body);
  await user.save();
  console.log("user saved succesfully");
  res.redirect('/');
});


/* Login user */
router.get('/login', function(req, res, next) {
  
  res.render('users/login');
});

router.post('/login', async function(req, res, next) {
  let user = await userModel.findOne({email: req.body.email,password: req.body.password});
  if(!user) {
    console.log("user not found");
    return res.redirect("/") ;
    
  } else{
  res.redirect('/tasks');
}

  return res.render('users/login');
});  


router.get('/profile/:id', async function(req, res, next) {

  let user = await userModel.findByI(req.params.id);
  user = Users(req.body);
  await user.save();
  res.render('users/profile',{user});
});


router.post('/profile/:id', async function(req, res, next) {
  let user = await userModel.findById(req.params.id);
  console.log(task);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await task.save();
  res.redirect('/profile');
});









/* logout user */
router.get('/logout', function(req, res, next) {

  req.session.user = null;
  res.render('users/login');
});




module.exports = router;
