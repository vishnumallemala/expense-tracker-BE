const express=require('express');
const category = require('../../src/category');
const categoryObj = new category();
const router=express.Router();

router.post("/", (req,res)=>{
	categoryObj.createCategory(req.body, function(err, resp){
		if(err){
			res.send(err);
		} else {
			res.send(resp);
		}
	});
});

router.get("/", (req,res)=>{
	let filter = req.body || {};
	categoryObj.getCategories(filter, function(err, resp){
		if(err){
			res.send(err);
		} else {
			res.send(resp);
		}
	});
});

module.exports=router;