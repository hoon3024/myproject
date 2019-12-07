

var kakaoStrategy = require('passport-kakao').Strategy;
var config = require('../config');

module.exports = function(app, passport) {
	return new kakaoStrategy({
		clientID: config.kakao.clientID,
		clientSecret: config.kakao.clientSecret,
		callbackURL: config.kakao.callbackURL
	}, function(accessToken, refreshToken, profile, done) {
		console.log('passport의 kakao 호출됨.');
		console.dir(profile);
		
		var options = {
		    criteria: { 'kakao.id': profile.id }
		};
		
		var database = app.get('database');
	    database.UserModel.load(options, function (err, user) {
			if (err) return done(err);
      
			if (!user) {
				var user = new database.UserModel({
					name: profile.displayName,
					email: profile.emails[0].value,
					provider: 'kakao',
					authToken: accessToken,
					kakao: profile._json
				});
        
				user.save(function (err) {
					if (err) console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
	    });
	});
};
