
module.exports = function(router, passport) {
    console.log('user_passport 호출됨.');

    // 홈 화면
    router.route('/').get(function(req, res) {
        console.log('/ 패스 요청됨.');

        console.log('req.user의 정보');
        console.dir(req.user);

        // 인증 안된 경우
        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.render('index.ejs', {login_success:false});
        } else {
            console.log('사용자 인증된 상태임.');
            res.render('index.ejs', {login_success:true});
        }
    });
    
    // 로그인 화면
    router.route('/login').get(function(req, res) {
        console.log('/login 패스 요청됨.');
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
	 
    // 회원가입 화면
    router.route('/signup').get(function(req, res) {
        console.log('/signup 패스 요청됨.');
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });
	 
    // 프로필 화면
    router.route('/profile').get(function(req, res) {
        console.log('/profile 패스 요청11됨.');

       //인증
        console.log('req.user 객체의 값');
        console.dir(req.user);

        // 인증 안된 경우
        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.redirect('/');
        } else {
            console.log('사용자 인증된 상태임.');
            console.log('/profile 패스 요청됨.');
            console.dir(req.user);

            if (Array.isArray(req.user)) {
                res.render('profile.ejs', {user: req.user[0]._doc});
            } else {
                res.render('profile.ejs', {user: req.user});
            }
        }
    });
	
    // 로그아웃
    router.route('/logout').get(function(req, res) {
        console.log('/logout 패스 요청됨.');
        req.logout();
        res.redirect('/');
    });

    //맵
   /* router.route('/kakao').get(function(req, res) {
        console.log('/kakao 패스 요청됨.');

        console.log('req.user 객체의 값');
        console.dir(req.user);

        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.redirect('/login');
        } else {
            console.log('사용자 인증된 상태임.');
            console.log('/kakao 패스 요청됨.');
            console.dir(req.user);

            if (Array.isArray(req.user)) {
                res.render('kakao.ejs', {user: req.user[0]._doc});
            } else {
                res.render('kakao.ejs', {user: req.user});
            }
        }
        //res.render('kakao.ejs', {user: req.user});
    });*/

    

    //kakao 가기전 
    router.route('/serach').get(function(req, res) {
        console.log('/serach 패스 요청됨.');

        console.log('req.user 객체의 값');
        console.dir(req.user);

        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.redirect('/login');
        } else {
            console.log('사용자 인증된 상태임.');
            console.log('/serach 패스 요청됨.');
            console.dir(req.user);

            if (Array.isArray(req.user)) {
                res.render('serach.ejs', {user: req.user[0]._doc});
            } else {
                res.render('serach.ejs', {user: req.user});
            }
        }
        //res.render('kakao.ejs', {user: req.user});
    }); 

    
    


    // 로그인 인증
    router.route('/login').post(passport.authenticate('local-login', {
        successRedirect : '/profile', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));

    // 회원가입 인증
    router.route('/signup').post(passport.authenticate('local-signup', {
        successRedirect : '/profile', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));
    router.route('/process/addMap').post(passport.authenticate('local-signup', {
        successRedirect : '/process/addMap', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));





   

    // 페이스북 인증 라우팅 
    router.route('/auth/facebook').get(passport.authenticate('facebook', { 
        scope : 'email' 
    }));

    // 페이스북 인증 콜백 라우팅
    router.route('/auth/facebook/callback').get(passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    router.route('/auth/facebook').get(passport.authenticate('facebook', { 
        scope : 'email' 
    }));

   
   

};

