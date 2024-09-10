import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>test test</h1>
			</div>
		),
	},
	{
		path: "about",
		element: <h1>about</h1>,
	},
	{
		path: "work-experience",
		element: <h1>work-experience</h1>,
	},
	{
		path: "projects",
		element: <h1>projects</h1>,
	},
	{
		path: "contact",
		element: <h1>contact</h1>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
