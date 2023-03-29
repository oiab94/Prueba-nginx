const log = require("./components/displayLog");
const express = require("express");
const cors = require("cors")

// * Iniciar EXPRESS
const app = express();
const port = 8000;

app.listen(
	port,
	() => {
		log.infoLog(`Puerto habilitado ${port}`)
});

// * Se activan los MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

// * Conexion a la DB
require("./configs/mongoose.config");

// * Conexion a las rutas de la API
require("./routes/project.routes")(app);