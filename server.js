var express = require("express");
var app = express();
var port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render("index.ejs", {
        greeting: "Hello World"
    });
});

app.listen(3000);

console.log('Code Sixty is spinning on ' + port)