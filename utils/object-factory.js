let modelFactory = function(dbModel, dbObj){
	let schema;
	let model;
	if(dbModel === 'expense'){
		schema = new dbObj.Schema({
			id:{
				type:String,
				required:true,
				unique: true,
				index: true
			},
			category:String,
			expenseName:String,
			currency:String,
			amount:{
				type:Number,
				min:1,
				required:true
			},
			date:Date
		});
		model = dbObj.model(dbModel,schema);
	} else if (dbModel === 'user'){
		schema = new dbObj.Schema({
			username:{
				type:String,
				required:true,
				unique: true,
				index: true
			},
			password:String,
			role:String
		});
		model = dbObj.model(dbModel,schema);
	} else if (dbModel === 'category'){
		schema = new dbObj.Schema({
			id:{
				type:String,
				required:true,
				unique: true,
				index: true
			},
			code:String,
			description:String
		});
		model = dbObj.model(dbModel,schema);
	} else if (dbModel === 'currency'){
		schema = new dbObj.Schema({
			id:{
				type:String,
				required:true,
				unique: true,
				index: true
			},
			code:String,
			description:String
		});
		model = dbObj.model(dbModel,schema);
	}

	return model;
};

module.exports = {
	modelFactory
};