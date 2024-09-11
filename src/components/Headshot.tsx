import React from "react";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";

const Headshot = () => {
	const buttonClasses = "size-max";
	const iconClasses = "size-6 fill-blue hover:fill-pink";

	return (
		<div className="pr-6">
			<div className="border-pink border-solid border-2 rounded-md">
				<div className="border-blue border-solid border-2 rounded-md">
					<img
						src="../images/headshot.png"
						alt="headshot"
						className="size-40 lg:size-48"
					></img>
				</div>
			</div>
			<div className="flex flex-row justify-around w-full py-3">
				<button className={buttonClasses}>
					<GitHubIcon className={iconClasses} />
				</button>
				<button className={buttonClasses}>
					<LinkedInIcon className={iconClasses} />
				</button>
			</div>
		</div>
	);
};

export default Headshot;
