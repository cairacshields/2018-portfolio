var express        = require("express"),
	bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
	methodOverride = require("method-override"),
	flash          = require("connect-flash"),
	app            = express();

//APP CONGIF

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.redirect("/index");
});

app.get("/index", function(req, res){
	res.render("home");
});



app.get("*", function(req, res){
	res.send("There is nothing on this page.");
});

app.listen(process.env.PORT || 2000, function(){
	console.log("Server Started!");
}) ;
