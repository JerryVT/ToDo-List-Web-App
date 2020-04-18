
module.exports.getDate = function() {

	const today = new Date();	
	const options ={
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	//var currentDay = today.getDay();
	const day = today.toLocaleDateString("en-US", options);

	return day;

}

module.exports.getDay = getDay;

function getDay() {

	const today = new Date();	
	const options ={
		weekday: "long"
	};

	//var currentDay = today.getDay();
	const day = today.toLocaleDateString("en-US", options);

	return day;

}