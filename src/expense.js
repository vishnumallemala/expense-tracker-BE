const dao = require('../connectors/mongo-connector');
const dbTable = 'expense';
const daoObj = new dao(dbTable);
class Expense{
	createExpense(data, cb){
		daoObj.create(data, function(err,resp){
			if(err){
				cb(err);
			}
			else{
				cb(null, resp);
			}
		});
	}

	getExpenses(filter, cb){
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

module.exports = Expense;