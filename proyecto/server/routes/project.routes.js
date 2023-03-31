const {
	setProject, 
	getProjects,
	updateProject,
	deleteProject } = require("../controllers/project.controller");

module.exports = (app) => {
	app.post("/api/setProject", setProject);
	app.get("/api/getProjects", getProjects);
	app.put("/api/updateProject/:id", updateProject);
	app.delete("/api/deleteProject/:id", deleteProject);
	app.get("/api/test", (req, res) => {
		res.send("Test exitoso");
	})
}