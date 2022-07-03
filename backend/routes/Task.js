var express = require('express');
var router = express.Router();
var {Tasks,validate}= require('../models/task');

/* GET home page. */


// display all Task
router.get('/', async function(req, res, next) {
    let task = Tasks.find()
    .then(task => {
        console.log("tasks fetched succhesful");
        res.render('Task/list', {
        title: "Tasks in DB", 
        tasks: task
        

    });
    })
    .catch(err => {
        console.log("unable to fetch Tasks" + err);
    })

    
  router.get('/add', function(req, res, next) {
        res.render('Task/add');
      });


      // Write values in to db  
      // validateProduct add thi metod after /add route to add middleware if asked 
      router.post('/add', async function(req, res, next) {
        
        let task = Tasks(req.body);
        await task.save();
        res.redirect('/tasks');
      });

      // delete values in to db
      router.get('/delete/:id', async function(req, res, next) {
        let task = await Tasks.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
      });

         // Edit values in to db
         router.get('/edit/:id', async function(req, res, next) {
            let task = await Tasks.findById(req.params.id);
            task = Tasks(req.body);
            await task.save();
            res.render('Task/edit',{task});
          });


         router.post('/edit/:id', async function(req, res, next) {
            let task = await Tasks.findById(req.params.id);
            console.log(task);
            task.title = req.body.title;
            task.date = req.body.date;
            task.status = req.body.status;
            await task.save();
            res.redirect('/tasks');
          });

        
      
  
});



module.exports = router;
