import { 
	createBrowserRouter, 
	RouterProvider } from "react-router-dom"
import ErrorPage from "../views/ErrorPage.view";
import Home from "../views/Home.view";
import KanbanBoard from "../views/KanbanBoard.view";
import NewProject from "../views/NewProject.view";
import UserForm from "../views/User.view";

const Index = () => {
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home />,
			errorElement: <ErrorPage />,
			children: [
				{
					path:"/",
					element: <KanbanBoard />		
				},
				{
					path:"/projects/new",
					element: <NewProject />
				},
				{
					path:"/sign_in",
					element:<UserForm />
				}
			]
		}
	])

	return (
		<RouterProvider router={router} />
	);
}

export default Index;