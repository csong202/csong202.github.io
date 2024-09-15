import { Content, NavBar } from "../components";
import workExperience from "../content/text/workExperience";

const WorkExperience = () => {
	return (
		<div className="bg-background h-full w-dvw text-purple">
			<NavBar />
			<div className="p-8 lg:p-12 xl:p-16">
				{workExperience.map(
					({
						jobTitle,
						company,
						location,
						date,
						description,
						logo,
					}) => (
						<Content
							h1Text={`${jobTitle} @ ${company}`}
							h2Text={`${date} | ${location}`}
							bulletPoints={description}
							className="mb-6"
							logo={require(`../images/${logo}`)}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default WorkExperience;
