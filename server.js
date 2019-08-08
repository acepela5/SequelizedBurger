var express = require("express");
var exphbs = require("express-handlebars");
// var mysql = require("mysql");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models")

app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/api-routes");

app.use(routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on port: ", PORT);
    });
});