// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

// ORM functions using burger specific input for the ORM
var burger = {
	all: function(cb){
		orm.selectAll(function(res){
			cb(res);
		});
	},
	create: function(name, cb){
		orm.insertOne(name, function(res){
			cb(res);
		});
	},
	update: function(id, cb){
		orm.updateOne(id, function(res){
			cb(res);
		});
	}
}

// Export the database functions for the controller
module.exports = burger;
