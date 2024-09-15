import { DecoratedImage } from "./index";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";

const Headshot = () => {
	const buttonClasses = "size-max";
	const iconClasses = "size-6 fill-blue hover:fill-pink";

	return (
		<div className="pr-6 flex flex-col align-center">
			<DecoratedImage image={require("../images/headshot.png")} />
			<div className="flex flex-row justify-around w-full py-3 max-w-48">
				<a
					className={buttonClasses}
					href="https://github.com/csong202"
					target="_blank"
					rel="noreferrer"
					title="GitHub Profile"
				>
					<GitHubIcon className={iconClasses} />
				</a>
				<a
					className={buttonClasses}
					href="https://www.linkedin.com/in/christina-song202/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn Profile"
				>
					<LinkedInIcon className={iconClasses} />
				</a>
			</div>
		</div>
	);
};

export default Headshot;
