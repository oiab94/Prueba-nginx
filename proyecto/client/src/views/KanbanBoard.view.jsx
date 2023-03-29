import { useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap"
import CardKanban from "../components/CardKanban";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const KanbanBoard = () => {
	const [cards, setCards] = useState([])
	const navigate = useNavigate();

	// * Obtener todos los datos de la DB
	useEffect(() => {
		axios.get("http://localhost:8000/api/getProjects")
			.then(projects => {setCards(projects.data)})
			.catch(err => console.log(err))
	}, [])

	// * Manejadores click
	const startProject = (data) => {
		const {id, title, dueDate} = data
		const dataUpdate = {
			title,
			dueDate,
			state:"bg-success",
			status:"Move to complete"
		}

		axios.put(
			"http://localhost:8000/api/updateProject/" + id,
			dataUpdate)
			.then(res => navigate(0))
	}

	const inProgress = (data) => {
		const {id, title, dueDate} = data;
		const dataUpdate = {
			title,
			dueDate,
			state:"bg-danger",
			status:"Remove Project"
		}

		axios.put(
			"http://localhost:8000/api/updateProject/" + id,
			dataUpdate)
			.then(res => navigate(0))
	}

	const completed = (data) => {
		const {id} = data;

		axios.delete(
			"http://localhost:8000/api/deleteProject/" + id)
			.then(res => navigate(0))
	}

	return (
		<>
		<Container>
			<Row>
				{/* Muestra los componentes en Backlog */}
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-info text-center">
							<h2>Backlog</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll"  style={{height:"470px"}}>
							{
								cards.map((item ,index) => {
									const id = item._id;
									const {title, dueDate, state, status} = item;

									if(state === "bg-warning")
										return <CardKanban 
											key={index}
											onClick={(e) => startProject({ id, title, dueDate })}
											values={{title, dueDate, state, status}} />
									return null;
								})
							}
						</div>
					</Row>
				</Col>
				
				{/* Muestra los componentes que se encuentran en progreso */}
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-warning text-center">
							<h2>In Progress</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll"  style={{height:"470px"}}>
						{
							cards.map((item ,index) => {
								const id = item._id;
								const {title, dueDate, state, status} = item;

								if(state === "bg-success")
									return <CardKanban 
										key={index} 
										onClick={() => inProgress({id, title, dueDate})}
										values={{title, dueDate, state, status}} />
								return null;
							})
						}
						</div>
					</Row>
				</Col>
				
				{/* Muestra los componentes completados */}
				<Col className="border border-dark">
				<Row>
						<div className="bg-success text-center">
							<h2>Completed</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll" style={{height:"470px"}}>
						{
							cards.map((item ,index) => {
								const id = item._id;
								const {title, dueDate, state, status} = item;

								if(state === "bg-danger")
									return <CardKanban 
										key={index} 
										onClick={() => completed({id})}
										values={{title, dueDate, state, status}} />
								return null;
							})
						}
						</div>
					</Row>
				</Col>
			</Row>
			<Row className="border border-top-0 border-dark p-2">
				<Col>
					<Button
						as={Link} to="/projects/new"
						variant="outline-primary">Add New Project</Button>
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default KanbanBoard;