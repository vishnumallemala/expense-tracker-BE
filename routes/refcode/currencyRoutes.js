const express=require('express');
const currency = require('../../src/currency');
const currencyObj = new currency();
const router=express.Router();

router.post("/", (req,res)=>{
	currencyObj.createCurrency(req.body, function(err, resp){
		if(err){
			res.send(err);
		} else {
			res.send(resp);
		}
	});
});

router.get("/", (req,res)=>{
	let filter = req.body || {};
	currencyObj.getCurrencies(filter, function(err, resp){
		if(err){
			res.send(err);
		} else {
			res.send(resp);
		}
	});
});

module.exports=router;