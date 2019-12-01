var local_login = require('./passport/local_login');
var local_signup = require('./passport/local_signup');
var facebook = require('./passport/facebook');


//모듈
module.exports = function (app, passport) { 
    console.log('config/passpost 호출');


//인증 성공시 호출
passport.serializeUser(function(user, done){
    console.log('serializeUser() 호출');
    console.dir(user);
    done(null, user);
});

//인증 후 요청마다 호출
passport.deserializeUser(function(user, done){
    console.log('deserializeUser() 호출');
    console.dir(user);
    done(null, user);
});

//인증방식설정
passport.use('local-login', local_login);
passport.use('local-signup', local_signup);
passport.use('facebook', facebook(app, passport));


};