import { Form, Button, Row } from "react-bootstrap";

const LoginUser = () => {
	return (
		<>
		<Form>
			<Form.Group className="mb-3">
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					required 
					type="email" />
				<Form.Control.Feedback>Email valido</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					required 
					type="password" />
				<Form.Control.Feedback>Email valido</Form.Control.Feedback>
			</Form.Group>

			<Row>
				<Button type="submit">Login</Button>
			</Row>
		</Form>
		</>
	);
}
export default LoginUser;