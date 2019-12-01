
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/local',
	db_schemas: [
	    {file:'./user_schema', collection:'users7', schemaName:'UserSchema', modelName:'UserModel'},
		
		{file:'./map_schema', collection:'maptest', schemaName:'mapSchema', modelName:'MapModel'}
	],
	route_info: [
       
		//
		{file:'./map', path:'/process/Mapadd', method:'Mapadd', type:'post'}	 
	],
	facebook: {		// passport facebook
		clientID: '1442860336022433',
		clientSecret: '13a40d84eb35f9f071b8f09de10ee734',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	}
}