const Home = () => {
	const getTerminalPrompt = (dir: string) => (
		<span>
			<span className="text-pink">csong202@Yoga7i:</span>
			<span className="text-blue">{`${dir}$`}</span>
		</span>
	);
	const getColouredCmd = (cmd: string) => {
		return <span className="text-teal">{cmd}</span>;
	};

	return (
		<div className="bg-black p-3 text-white [text-size-adjust:none]">
			<p>
				{getTerminalPrompt("~")} {getColouredCmd("cd")}{" "}
				dev/personal_website
			</p>
			<p>
				{getTerminalPrompt("~/dev/personal_website")}{" "}
				{getColouredCmd("cat")} intro.txt
			</p>
			<p>Hi, my name is Christina Song and this is my personal website</p>
			<p>{getTerminalPrompt("~/dev/personal_website")}</p>
			<p>
				{getTerminalPrompt("~/dev/personal_website")}{" "}
				{getColouredCmd("cat")} quick-summary.txt
			</p>
			<p>
				{getTerminalPrompt("~/dev/personal_website")} I am a 4th year
				computer science student at the University of Ottawa, and I am
				seeking a full-time role starting in summer 2025. Currently
				based in Ottawa and willing to relocate.
			</p>
			<p>{getTerminalPrompt("~/dev/personal_website")}</p>
			<p>
				{getTerminalPrompt("~/dev/personal_website")}{" "}
				{getColouredCmd("cat")} next-steps.txt
			</p>
			<p>
				{getTerminalPrompt("~/dev/personal_website")} Feel free to take
				a look around!
			</p>
		</div>
	);
};

export default Home;
