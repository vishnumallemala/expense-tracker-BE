const dao = require('../model/dao');
const dbTable = 'currency';
const daoObj = new dao(dbTable);
class Category{
	createCurrency(data, cb){
		if(data && data instanceof Array){
			data.forEach((category)=>{
				daoObj.create(category, function(err){
					if(err){
						cb(err);
					}
				},true);
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
			},false);
		}
	}

	getCurrencies(filter, cb){
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