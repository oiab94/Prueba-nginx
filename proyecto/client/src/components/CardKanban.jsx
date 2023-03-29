import {Card, Button} from "react-bootstrap";

const CardKanban = (props) => {
	const {title, dueDate, state, status} = props.values;
	const due = new Date(dueDate);

	return (
		<>
			<Card className="mt-2 ">
				<Card.Body>
					<Card.Title>{ title }</Card.Title>
					<Card.Text>
						Due: {
							(due.getUTCMonth()+ 1) + " / " +
							due.getUTCDate() + " / " +
							due.getUTCFullYear() }
						</Card.Text>
					<Button 
						onClick={props.onClick}
						className={state}>
							{ status }
					</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default CardKanban;