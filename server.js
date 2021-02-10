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

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give server access to them


app.listen(PORT, function () {
    console.log(`App is listening at localhost:${PORT}`);
});