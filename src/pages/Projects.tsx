import { Content, NavBar } from "../components";
import projects from "../content/text/projects";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";

const Projects = () => {
	return (
		<div className="bg-background h-full sm:h-dvh  w-dvw text-purple">
			<NavBar />
			<div className="p-8 lg:p-12 xl:p-16">
				{projects.map(({ name, ghLink, description }) => (
					<Content
						h1Text={name}
						h1Link={ghLink}
						h1LinkIcon={
							<GitHubIcon className="size-6 fill-blue hover:fill-pink" />
						}
						h1LinkTitle={`${name} GitHub`}
						bulletPoints={description}
						className="mb-6"
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
