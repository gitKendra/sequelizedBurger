// Setup MySQL connection
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  // Heroku-JawsDB Connection
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  // MySQL DB Connection Information
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 8889
  });
}

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

// Export the connection for the ORM
module.exports = connection;