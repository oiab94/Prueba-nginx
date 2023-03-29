import {
	Container,
	Col,
	Row
} from "react-bootstrap";
import LoginUser from "./user/Login.view";
import RegisterUser from "./user/Register.view";

const UserForm = () => {
	return (
		<>
			<Container>
				<Row>
					{/* Formulario de registro */}
					<Col md={6} className="border border-dark">
						<Row>
							<div className="text-center bg-secondary">
								<h2>Register User</h2>
							</div>
						</Row>
						
						<Row className="p-2">
							<RegisterUser />
						</Row>
					</Col>

					{/* Formulario de Login */}
					<Col md={{span:5, offset:1}} className="border border-dark">
						<Row>
							<div className="text-center bg-secondary">
								<h2>Login User</h2>
							</div>
						</Row>
						
						<Row className="p-2">
							<LoginUser />
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default UserForm;