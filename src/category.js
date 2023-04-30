const dao = require('../connectors/mongo-connector');
const dbTable = 'category';
const daoObj = new dao(dbTable);
class Category{
	createCategory(data, cb){
		if(data && data instanceof Array){
			data.forEach((category)=>{
				daoObj.create(category, function(err){
					if(err){
						cb(err);
					}
				});
			});
			cb(null,'Data Inserted');
		} else {
			daoObj.create(data, function(err,resp){
				if(err){
					cb(err);
				}
				else{
					cb(null, resp);
				}
			});
		}
	}

	getCategories(filter, cb){
		daoObj.find(filter, function(err, data){
			if(err){
				cb(err);
			}
			else {
				cb(null, data);
			}
		});
	}
}

module.exports = Category;