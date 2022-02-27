const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
	name: {
		type: String,
	},
	priority: {
		type: Number,
	},
	label: [String],
});
