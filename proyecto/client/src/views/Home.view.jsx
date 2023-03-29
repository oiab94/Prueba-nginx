import { Outlet } from "react-router-dom"

const Home = () => {
	return(
		<>
		<div className="text-center fw-bolder">
			<h1>Project Manager</h1>
		</div>
		<div>
			{/* Renderiza los hijos indicados en el Index */}
			<Outlet />
		</div>
		</>
	);
}

export default Home;