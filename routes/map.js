var Mapadd = function(req, res) {
	console.log('map 모듈 안에 있는 add 호출됨.');
 
    var Name = req.body.name || req.query.name;
    var Address = req.body.address || req.query.address;
    
	
    console.log('요청 파라미터 : ' + Name + ', ' + Address + ', ');
	
    // 데이터베이스 객체 참조
	var database = req.app.get('database');
	
    // 데이터베이스 객체가 초기화된 경우
	if (database.db) {
		addMap(database, Name, Address, function(err, result) {
			if (err) {
                console.error('맵데이터 추가 중 에러 발생 : ' + err.stack);
                
                
                
                return;
            }
			
			if (result) {
				console.dir(result);
				console.log("/kakao.ejs 실행중");
				

 				res.render('kakao.ejs', {Name:Name , Address: Address});
				 
				
				
			} else{
				console.log("잘못된 접근");
				res.render('login.ejs');
			}
				
			
		});
	} else {
		
	}
	
};

var addMap = function(database, name, address, callback) {
	console.log('addmap 호출됨.');
	
	// MapModel 인스턴스 생성
	var map = new database.MapModel(
			{name:name, address:address,
			}
		);

	// save()로 저장
	map.save(function(err) {
		if (err) {
			callback(err, null);
			return;
		}
		
	    console.log("데이터 추가함.");
	    callback(null, map);
	     
	});
}




module.exports.Mapadd = Mapadd;
