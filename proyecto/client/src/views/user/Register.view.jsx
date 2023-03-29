import { Form, Button, Row } from "react-bootstrap"

const RegisterUser = () => {
	return (
		<>
		<Form>
			{/* Set FirstName */}
			<Form.Group className="mb-3" >
				<Form.Label>First Name:</Form.Label>
				<Form.Control
					required 
					type="text" />
			</Form.Group>

				{/* Set Lastname */}
			<Form.Group className="mb-3" >
				<Form.Label>Last Name:</Form.Label>
				<Form.Control
					required 
					type="text" />
			</Form.Group>

				{/* Set email */}
			<Form.Group className="mb-3">
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					required
					type="email" />
			</Form.Group>

				{/* Set password */}
			<Form.Group className="mb-3">
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					required
					minLength={6}
					type="password" />
			</Form.Group>

				{/* Repeat password */}
			<Form.Group className="mb-3">
				<Form.Label>Confirm Password:</Form.Label>
				<Form.Control 
					required
					type="password" />
			</Form.Group>

			<Row>
				<Button type="submit">Register</Button>
			</Row>
		</Form>
		</>
	);
}

export default RegisterUser;