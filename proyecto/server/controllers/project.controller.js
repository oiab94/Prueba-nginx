const project = require("../models/project.model");

// * Manejador de errores
const handleErrors = (err) => {
	let errors = {title:"", dueDate:""};

	// * Validamos el error
	if(err.message.includes("project validation failed"))
		// * Escribimos los errores que necesitamos saber
		Object.values(err.errors)
			.forEach(({properties}) => {
				errors[properties.path] = properties.message;
			})

	return errors;
}

// * SET un nuevo proyecto
const setProject = (req, res) => {
	const {title, dueDate, state="bg-warning", status="Start Project"} = req.body;

	project.create({title, dueDate, state, status})
		.then(data => res.status(201).json(data))
		.catch(error => {
			const errors = handleErrors(error)
			res.status(400).json(error)
		})
}

// * GET todos los proyectos
const getProjects = (req, res) => {
	project.find({})
		.then(data => res.status(201).json(data))
		.catch(err => res.status(400).json(err));
}

// * PUT un proyecto
const updateProject = (req, res) => {
	project.findOneAndUpdate(
		{_id: req.params.id},
		req.body,
		{new:true})
		.then(data => res.status(201).json(data))
		.catch(err => res.status(400).json(err))
};

// * DELETE un proyecto
const deleteProject = (req, res) => {
	project.deleteOne({_id: req.params.id})
		.then(data => res.status(201).json(data))
		.catch(error => res.status(400).json(data))
};

module.exports = {
	setProject,
	getProjects,
	updateProject,
	deleteProject
};