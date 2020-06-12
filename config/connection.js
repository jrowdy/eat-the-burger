var mysql = require("mysql");

// mysql://gyknnc1f63jktviy:cm8hwthaysgb5x89@cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wstxu7ltuhl6pbqa
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
  user: "gyknnc1f63jktviy",
  password: "cm8hwthaysgb5x89",
  database: "wstxu7ltuhl6pbqa"
});
};


// Export connection for our ORM to use.
module.exports = connection;
