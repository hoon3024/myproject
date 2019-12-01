
var Schema = {};

Schema.createSchema = function(mongoose) {
	
	// 스키마 정의
	var MapSchema = mongoose.Schema({
		name: {type: String, 'default':''},
		address : {type : String, 'default' : ''},
	    created_at: {type: Date, index: {unique: false}, 'default': Date.now},
	    updated_at: {type: Date, index: {unique: false}, 'default': Date.now}
	});
	


	// 스키마에 static 메소드 추가
	
	MapSchema.static('findAll', function(callback) {
		return this.find({}, callback);
	});
	
	

	return MapSchema;
};

// module.exports
module.exports = Schema;

