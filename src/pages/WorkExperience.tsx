import { Content } from "../components";
import workExperience from "../content/text/workExperience";
import { ReactComponent as WebsiteIcon } from "../icons/outside-page.svg";

const WorkExperience = () => {
	return (
		<>
			{workExperience.map(
				({
					jobTitle,
					company,
					location,
					date,
					description,
					logo,
					link,
					linkTitle,
				}) => {
					const linkProps = link
						? {
								h1Link: link,
								h1LinkIcon: (
									<WebsiteIcon className="size-6 fill-blue hover:fill-pink" />
								),
								h1LinkTitle: linkTitle,
						  }
						: {};
					return (
						<Content
							h1Text={`${jobTitle} @ ${company}`}
							h2Text={`${date} | ${location}`}
							bulletPoints={description}
							className="mb-6"
							logo={require(`../images/${logo}`)}
							{...linkProps}
						/>
					);
				}
			)}
		</>
	);
};

export default WorkExperience;
