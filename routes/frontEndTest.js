<<<<<<< HEAD
var mongoose = require('mongoose')
var BlogPosts = mongoose.model('BlogPosts');
=======
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

>>>>>>> 73c78a20692cafe14051594cfa587766a1730e30
module.exports = function(app){

	/* ==================================== 

		// Route tutorial //

			# GET method (ex: simple links, nav bar linking...)
			
			app.get('/example',function(req,res){
				res.render('example')
			});

				% Note % 
					We have "example.ejs" in views folder,
					and want to link "http://localhost:1337/example" to example.ejs page.
					And DONT forget slash in app.get().
				% Note %

			p.s. GET method can do almost all the simple routing~~~ 

	==================================== */

	app.get('/example',function(req,res){
		res.render('example', { message : 'example.ejs' }); // You can also pass something to the front
	});
<<<<<<< HEAD


	app.get('/api/todos',function(req,res){

	})

=======
	
	//render to a file called example.ejs
	app.get('/test',function(req,res){
		res.render('testing', { 
			message : 'Test.ejs',
		});
	})

	app.get('/HackNTUMemberrrrr',function(req,res){
		res.render('HackNTUMembers')
	})
	app.get('/testnew',function(req,res){
		res.render('testnew')
	})
	app.get('/activitynew',function(req,res){
		res.render('activitynew')
	})
	// get will add somethind in URL 
	//so it will add /HackNTUMenberrrrr behind URL

	app.get('/getUser', function(req,res){
		res.render('getUser')
    		
	})
>>>>>>> 73c78a20692cafe14051594cfa587766a1730e30
}