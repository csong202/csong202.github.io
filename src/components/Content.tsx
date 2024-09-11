type ContentProps = {
	h1Text?: string;
	h2Text?: string;
	paragraphs: string[];
	className?: string;
};

const Content = (props: ContentProps) => {
	const { h1Text, h2Text, paragraphs, className } = props;

	return (
		<div className={className}>
			{h1Text && <h1 className="text-teal text-2xl">{h1Text}</h1>}
			{h2Text && <h2 className="text-blue text-xl">{h2Text}</h2>}
			{paragraphs.map((paragraph) => (
				<p className="text-purple" key={paragraph}>
					{paragraph}
				</p>
			))}
		</div>
	);
};

export default Content;
