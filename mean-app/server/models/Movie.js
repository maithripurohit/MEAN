var mongoose = require('mongoose');

//movie schema

var MovieSchema = new mongoose.Schema({
	title: {
		type:String,
		required:true
	},
	url: {
		type:String,
		required:true
	}
});

module.exports = MovieSchema;