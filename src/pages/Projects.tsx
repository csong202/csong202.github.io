import { Content } from "../components";
import projects from "../content/text/projects";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";

const Projects = () => {
	return (
		<>
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
		</>
	);
};

export default Projects;
