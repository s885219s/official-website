// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebook' : {
		'clientID' 		: '901089699907144', // your App ID
		'clientSecret' 	: '94d3fa8b74452f5b5f8d9cbe473ba812', // your App Secret
		'callbackURL' 	: 'http://ntuecon.info:1337/auth/facebook/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:1337/auth/google/callback'
	}

};