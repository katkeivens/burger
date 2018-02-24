const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const burgerRoutes = require('./controllers/burgers_controller.js')

const app = express();
const port = process.env.port || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static('public'));


app.use(burgerRoutes);

app.listen(port, function() {
  console.log("listening on port", port);
});