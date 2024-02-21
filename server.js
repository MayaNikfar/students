// Require modules
const express = require('express');
const path = require('path');
// Create the Express app
const app = express();
const studentDb = require('./data/studentDb');  

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

  
// tell server about our routes and the functions
app.get('/students', function(req, res) {
    console.log(req.body);
    res.render('students/index', {students: studentDb.getAll()});
  });

// Get route to students/show

app.get('/students/:id', function(req, res) {
    console.log('The value for the :id route parameter is: ${req.params.id}');
    console.log(req.body);
    res.render('students/show', {student: studentDb.getOne(req.params.id)});
  });


// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
  });