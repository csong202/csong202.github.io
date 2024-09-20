const Resume = () => {
	return (
		<div>
			<h1 className="text-teal text-lg sm:text-xl">Resume</h1>
			<object
				type="application/pdf"
				data={require("../content/resume/ChristinaSong_Resume.pdf")}
				title="Christina Song Resume"
				className="h-96 xs:h-128 sm:h-144 md:h-176 lg:h-176 w-72 xs:w-112 sm:w-144 md:w-160"
			></object>
			<p>Last updated: 2024/09/20</p>
		</div>
	);
};

export default Resume;
