type ContentProps = {
	logo?: any;
	media?: any; // TODO: projects page
	h1Text?: string;
	h2Text?: string;
	paragraphs?: string[];
	bulletPoints?: string[];
	className?: string;
};

const Content = (props: ContentProps) => {
	const {
		h1Text,
		h2Text,
		paragraphs = [],
		bulletPoints,
		className,
		logo,
	} = props;
	const responsiveFontSizeClasses = "text-s md:text-base";

	return (
		<div className={className}>
			{/* TODO extract company name from h1. separate headings for job title and company? */}
			{logo && (
				<img
					src={logo}
					alt={`${h1Text} logo`}
					className="h-10 md:h-12"
				></img>
			)}
			{h1Text && (
				<h1 className="text-teal text-lg sm:text-xl">{h1Text}</h1>
			)}
			{h2Text && <h2 className="text-blue sm:text-lg">{h2Text}</h2>}
			{bulletPoints && (
				<ul
					className={`list-disc marker:text-pink ${responsiveFontSizeClasses}`}
				>
					{bulletPoints.map((bulletPoint) => (
						<li key={bulletPoint}>{bulletPoint}</li>
					))}
				</ul>
			)}
			{paragraphs.map((paragraph) => (
				// TODO: bad practice to have whole paragraph as key?
				<p
					className={`text-purple  ${responsiveFontSizeClasses}`}
					key={paragraph}
				>
					{paragraph}
				</p>
			))}
		</div>
	);
};

export default Content;
