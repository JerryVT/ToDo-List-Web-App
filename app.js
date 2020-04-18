const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js")		//adding a module not added by npm

const app = express();

app.set("view engine", "ejs");

let day = date.getDate();		//	retrieves day anddate
// let day = date.getDay();	//retrieves day only

const items = ["Buy Food"];		//arrays declared const can be modified by adding new elements
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
	
	

	
	//var day= "";

	

	/*
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
*/

/*var currentDayName = weekday[today.getDay()];

	if (currentDay === 0 || currentDay === 6) {
		// res.write("<h2>It is weekend</h2>");
		// res.write("Enjoy the Day");
		// res.send();
		day = "Weekend";

		//res.sendFile(__dirname + "/index.html");
	} else {
		day = "Weekday";
		//res.send("Today is not weekend");
	}
	*/

	res.render("list", {listTitle:day,newListItems: items});

});

app.post("/", function(req, res){
	let item = req.body.newItem;

	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	}
	//console.log(item);

})

app.get("/work", function(req, res){
	res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
	let item = res.body.newItem;
	workItems.push(item);
	res.redirect("/");
})

app.get("/about", function(req, res){
	res.render("about");
});


app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running at 3000");
});
