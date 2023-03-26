const express=require('express');
const expense = require('../src/expense');
const expenseObj = new expense();
const router=express.Router();

router.post("/", (req,res)=>{
	expenseObj.createExpense(req.body, function(err,resp){
		if(err){
			res.send(err);
		}else{
			res.send(resp);
		}
	});
	// res.status(200).send('Added your expense');
});
router.get("/",(req,res)=>{
	let filter = req.body || {};
	expenseObj.getExpenses(filter, function(err, resp){
		if(err){
			res.send(err);
		} else {
			res.send(resp);
		}
	});
});
module.exports=router;