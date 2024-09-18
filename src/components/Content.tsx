type ContentProps = {
	logo?: any;
	media?: any; // TODO: projects page media?
	h1Text?: string;
	h1Link?: string;
	h1LinkIcon?: any;
	h1LinkTitle?: string;
	h2Text?: string;
	paragraphs?: string[];
	bulletPoints?: string[];
	className?: string;
};

const Content = (props: ContentProps) => {
	const {
		logo,
		h1Text,
		h1Link,
		h1LinkIcon,
		h1LinkTitle,
		h2Text,
		paragraphs,
		bulletPoints,
		className,
	} = props;
	const responsiveFontSizeClasses = "";

	return (
		<div className={className}>
			{logo && (
				<img
					src={logo}
					alt={`${h1Text} logo`}
					className="h-10 md:h-12"
				></img>
			)}
			{h1Text && (
				<div className="flex flex-row">
					<h1 className="text-teal text-lg sm:text-xl mr-3">
						{h1Text}{" "}
					</h1>
					{h1Link && (
						<a
							className="size-max"
							href={h1Link}
							target="_blank"
							rel="noreferrer"
							title={h1LinkTitle}
						>
							{h1LinkIcon}
						</a>
					)}
				</div>
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
			{paragraphs &&
				paragraphs.map((paragraph) => (
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
