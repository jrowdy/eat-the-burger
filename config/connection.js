var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "burger_db"
});
};


// Export connection for our ORM to use.
module.exports = connection;