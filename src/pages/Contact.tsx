import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../icons/email.svg";
import { Resume } from "../components";

const Contact = () => {
	const buttonClasses =
		"flex flex-row flex-wrap text-wrap text-blue hover:text-pink fill-blue hover:fill-pink";
	const iconClasses = "size-6 mr-2";
	return (
		<>
			<h1 className="text-teal text-lg sm:text-xl">
				Let's Stay in Touch!
			</h1>
			<div className="flex flex-col sm:flex-row sm:space-around">
				<a
					className={`${buttonClasses} mr-4`}
					href="mailto:christina.song202@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="Email"
				>
					<EmailIcon className={iconClasses} />
					christina.song202@gmail.com
				</a>
				<a
					className={buttonClasses}
					href="https://www.linkedin.com/in/christina-song202/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn Profile"
				>
					<LinkedInIcon className={iconClasses} />
					christina-song202
				</a>
			</div>
			<p className="mt-4 mb-6">
				*Note: I am more likely to respond to email than LinkedIn
				messages
			</p>
			<Resume />
		</>
	);
};

export default Contact;
