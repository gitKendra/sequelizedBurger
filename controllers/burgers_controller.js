const express = require('express');
const router = express();

// Import the model to use its database functions.
const burger = require('../models/burger.js');

router.get('/', function(req, res){
	// Get burgers from database to display on page
	burger.findAll().then(burgers => {
		var burgerObj = {
			burgers: burgers
		}
		res.render("index", burgerObj);
	});
});

// Add burger to database
router.post('/', function(req, res){
	burger.create({
		burgerName: req.body.burger
	}).then(function (data) {
		res.redirect('/');
	});
});


// Update specific burger
router.put('/api/burgers/:id', function(req, res){
	
	burger.update({
		devoured: 1
	},{
		where: {
			id: req.params.id
		}
	}).then(function(result){
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}	
	});
});

// export the router
module.exports = router;
