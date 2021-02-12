var connection = require("./connection.js");
var orm = {
    displayAllBurgers: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    addBurger: function (burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, burgerName, function (err, response) {
            if (err) throw err;
            cb(response);
            console.log(response)
        });
    },
    // deleteBurger: function (id, cb) {
    //     connection.query("DELETE FROM burgers WHERE id = ?", [id], function (err, response) {
    //         if (err) throw err;
    //         // console.log(response);
    //         cb(response);
    //     });
    // },
    updateBurger: function (id, cb) {
        connection.query("UPDATE burgers SET consumed = 1 WHERE id = ?", [id], function (err, response) {
            if (err) throw err;
            // console.log(response);
            cb(response);
        })
    }
}
module.exports = orm;