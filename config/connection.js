var mysql = require("mysql");

//create connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});
//make connection
connnection.connect(function (err) {
    if (err) {
        console.error(`Error connecting to ${err.stack}`);
        return;
    }
    console.log(`connected as ID ${connection.threadId}`);
});

//export the connection for orm use
module.exports = connection;

