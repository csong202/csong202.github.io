import { Content, NavBar } from "../components";
import projects from "../content/text/projects";

const Projects = () => {
	return (
		<div className="bg-background h-full sm:h-dvh  w-dvw text-purple">
			<NavBar />
			<div className="p-8 lg:p-12 xl:p-16">
				{projects.map(({ name, ghLink, description }) => (
					<Content
						h1Text={name}
						ghLink={ghLink}
						bulletPoints={description}
						className="mb-6"
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
