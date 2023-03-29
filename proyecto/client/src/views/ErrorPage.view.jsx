import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage (){
	const errorRouter = useRouteError();
	const {statusText, error} = errorRouter;

	return (
		<>
			<div className="d-flex align-items-center justify-content-center vh-100">
				<div className="text-center row">
					<div className=" mt-5">
						<p className="fs-3">
							<span className="text-danger">Oppss!!</span>
							{statusText}
						</p>
						<p className="lead">{error.message}</p>
						<Link to={"/"} className="btn btn-primary">Go Home</Link>
					</div>
				</div>
			</div>
		</>
	);
}