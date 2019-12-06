
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://user:3024@cluster0-shard-00-00-koakh.mongodb.net:27017,cluster0-shard-00-01-koakh.mongodb.net:27017,cluster0-shard-00-02-koakh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
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