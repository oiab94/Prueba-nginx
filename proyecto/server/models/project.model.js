const mongoose = require("mongoose");

// * Esquema
const projectSchema = new mongoose.Schema({
	title: {
		type:String,
		required: [true, "Title of project is required"],
		minlength: [3, "Title must be 3 characters"]
	},
	dueDate: {
		type: Date,
		required: [true, "Due date is required"]
	},
	state: {
		type: String,
		enum: ["bg-warning","bg-success", "bg-danger"]
	},
	status: {
		type: String,
		enum: ["Start Project", "Move to complete", "Remove Project"]
	}
}, {timestamps:true});

// * Exportamos el modelo
module.exports = mongoose.model("project", projectSchema);