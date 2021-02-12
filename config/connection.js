var mysql = require("mysql");

//create connection to mysql database

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

//make connection
connection.connect(function (err) {
    if (err) {
        console.error(`Error connecting to ${err.stack}`);
        return;
    }
    console.log(`connected as ID ${connection.threadId}`);
});

//export the connection for orm use
module.exports = connection;

