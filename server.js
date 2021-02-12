var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();
// Static content for burger app from the public directory
app.use(express.static("public"));

// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
var exphbs = require("express-handlebars");
const orm = require("./config/orm");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    orm.displayAllBurgers(function (response) {
        // console.log(response);
        res.render("index", { burgers: response }) //returns back html data
    });
});
add.post("/api/burgers/", function (req, res) {
    orm.addBurger(req.body.burgerName, function (response) {
        res.json({ id: response.InsertId });

    });
});

app.put("/api/burgers/:id", function (req, res) {
    orm.updateBurger(req.params.id, function (response) {
        res.end();
    });
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
