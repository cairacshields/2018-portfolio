var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
	email:String,
	number:String,
	name:String
});

module.exports = mongoose.model("Contact", contactSchema);