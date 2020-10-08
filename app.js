const express = require("express"),
	  app     = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
	res.render("home");
});

app.get("/about", (req, res) =>{
	res.render("about");
});

const port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Deploy Demo Has Started");
});