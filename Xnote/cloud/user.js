//provide endpoints for user signin and signup

module.exports = function (){
	var express = require('express');
	var app = express();

	// Signs up a new user
  app.post('/signup_submit/', function(req, res) {
  	//username & password in section one
    var username = req.body.email;
    var password = req.body.password;
    //basic perosnal info in section two
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    //profile image
    //var profile_pic = req.body.profile_pic;
    var profile_base = "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";
    
    var imgFile = new Parse.File("default.png", { base64: profile_base});

    var user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', username); //username = email
    user.set('first_name',first_name);
    user.set('last_name', last_name);
    user.set('profile', imgFile);
    user.set('balance',50);
    
    user.signUp().then(function(user) {

      console.log('a user just signed up');
      res.send('succeed');
      return;
    
    }, function(error) {
      // Show the error message and let the user try again
      console.log('failed sign up a user with error',error);
      res.send(error.message);
      return;
    });
  });

  // Logs in the user endpoint
  app.post('/log_in/', function(req, res) {
    
      var username = req.body.email;
      var password = req.body.password;

      Parse.User.logIn(username, password, {
        
        success: function(user) {
          res.send(user);
          return;
        },
        error: function(user, error) {
          res.send(error.message);
          return;
        }

      });
 
  });  


  app.post('/upload_Img/', function(req, res) {

    var profile = req.body.profile;
    var imgFile = new Parse.File("profile.png", { base64: profile});
    var currentUser = Parse.User.current();

    imgFile.save().then(function() {
      // The file has been saved 
      //refresh the stored user
      currentUser.set('profile', imgFile);
      //save user
      currentUser.save(null, {
      success: function(user) {
        res.send(user);
        return;
      },
      error: function(error) {
        res.send(error.message);
        return;
      }
    });
    
    }, function(error) {
      // The file either could not be read, or could not be saved.
      res.send(error.message);
      return;
    });

  });

  // Logs out the user
  app.post('/log_out/', function(req, res) {
    
    Parse.User.logOut();
    res.send('succeed');

  });

  app.post('/update_profile/', function(req, res) {

      var first_name = req.body.first_name;
      var last_name = req.body.last_name;
      var email = req.body.email;
      var classyear = req.body.classyear;

      var currentUser = Parse.User.current();

      currentUser.set('first_name',first_name);
      currentUser.set('last_name', last_name);
      currentUser.set('email', email);
      currentUser.set('classyear', classyear);

      currentUser.save(null, {
        success: function(user) {
          res.send(user);
          return;
        },
        error: function(error) {
          res.send(error.message);
          return;
        }
    });

  });

  app.post('/update_courses/', function(req, res) {

      var course_list = req.body.course_list;
      var currentUser = Parse.User.current();
      currentUser.set('courses',course_list);

      currentUser.save(null, {
        success: function(user) {
          res.send(user);
          return;
        },
        error: function(error) {
          res.send(error.message);
          return;
        }
    });

  });

  return app;

}();