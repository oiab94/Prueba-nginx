import { useState } from "react";
import { 
	Container, 
	Col, 
	Row,
	Button, 
	Card, 
	Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
	const [formValid, setFormValid] = useState(false);
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const navigate = useNavigate();

	// * Manejador de envio de datos
	const handlerSubmit = (event) => {
		const data = {
			title, 
			dueDate,
			state:"bg-warning",
			status:"Start Project",
		};
		event.preventDefault();

		// * Validamos nuestros datos antes de enviar
		if(title && dueDate !== "")
		// * Se envia los datos al post
			axios.post(
				"http://localhost:8000/api/setProject", 
				data)
				.then(res => navigate("/")) // * Si la respuesta es exitosa retorna la "home"
				.catch(err => console.log(err))
		else
			setFormValid(true)
	}


	return (
		<>
			<Container>
				{/* Despliega el botón de retorno */}
				<Col>
					<Row className="justify-content-end mb-2" sm={6}>
						<Link to="/">Back to dashboard</Link>
					</Row>
			
				{/* Despliega el formulario de nuevo proyecto */}
					<Row>
						<Card>
							<Card.Header>Plan a new project</Card.Header>
							<Card.Body className="p-5">
								<Form onSubmit={handlerSubmit} noValidate validated={formValid}>
									<Form.Group as={Row} controlId="formNewProject" className="mb-5">
										<Form.Label column sm={2}>Project</Form.Label>
										<Col sm={10}>
										<Form.Control 
											required
											minLength={3}
											type="text" placeholder="Name of project"
											onChange={e => setTitle(e.target.value)} />
										<Form.Control.Feedback type="invalid">
											Please set a name
										</Form.Control.Feedback>
										</Col>
									</Form.Group>

									<Form.Group as={Row} controlId="formNewProject" className="mb-5">
										<Form.Label column sm={2}>Due date</Form.Label>
										<Col sm={10}>
										<Form.Control 
											required
											type="date" 
											onChange={e => setDueDate(e.target.value)} />
										<Form.Control.Feedback type="invalid">
											Please select a day
										</Form.Control.Feedback>
										</Col>
									</Form.Group>
									<Row>
										<Button type="submit">Plan Project</Button>
									</Row>
								</Form>
							</Card.Body>
						</Card>
					</Row>
				</Col>
			</Container>
		</>
	);
}

export default NewProject;