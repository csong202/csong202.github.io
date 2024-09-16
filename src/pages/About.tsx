import { Content, Headshot } from "../components";
import about from "../content/text/about";

const About = () => {
	const {
		introHeading,
		introContent,
		outsideWorkHeading,
		outsideWorkContent,
	} = about;
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between content-center p-6">
				<Headshot />
				<Content h1Text={introHeading} paragraphs={introContent} />
			</div>
			<div className="flex flex-col md:flex-row justify-between p-6">
				<Content
					h2Text={outsideWorkHeading}
					paragraphs={outsideWorkContent}
				/>
				{/* TODO pictures */}
			</div>
		</>
	);
};

export default About;
