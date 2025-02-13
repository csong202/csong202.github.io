import { createHashRouter, RouterProvider } from "react-router-dom";
import { PageWrapper } from "./components";
import { About, Contact, Home, Projects, WorkExperience } from "./pages";

const router = createHashRouter([
	{
		path: "/",
		element: <PageWrapper page={<Home />}></PageWrapper>,
	},
	{
		path: "about",
		element: <PageWrapper page={<About />}></PageWrapper>,
	},
	{
		path: "work-experience",
		element: <PageWrapper page={<WorkExperience />}></PageWrapper>,
	},
	{
		path: "projects",
		element: <PageWrapper page={<Projects />}></PageWrapper>,
	},
	{
		path: "contact",
		element: <PageWrapper page={<Contact />}></PageWrapper>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
