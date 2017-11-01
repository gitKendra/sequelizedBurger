// Import database connection.
var connection = require('./connection.js');

// Create methods that will execute the necessary MySQL commands in the controller
var orm = {
	// Select all burgers in the database
	selectAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Insert a new burger into the database
	insertOne: function(val, cb){
		var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
		connection.query(queryString, [val], function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	// Update and existing burger in the database. val is the id of the burger to update
	updateOne: function(val, cb){
		var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
		connection.query(queryString, [val], function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	}
}

// export ORM object
module.exports = orm;
