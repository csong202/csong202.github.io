type DecoratedImageProps = {
	image: any;
};

const DecoratedImage = (props: DecoratedImageProps) => {
	const { image } = props;

	const getImgBorderClasses = (colour: string) =>
		`border-${colour} border-solid border-2 rounded-md max-w-52 max-h-52 size-52`;

	return (
		<>
			{/* <div className={getImgBorderClasses("pink")}> */}
			{/* TODO: Fix border colour bug. Only pink shows up, every other colour shows as purple */}
			{/* <div
				className={`${getImgBorderClasses("pink")} flex justify-center`}
			> */}
			<img
				src={image}
				alt="headshot"
				className="max-w-48 max-h-48 size-48 self-center"
			></img>
			{/* </div> */}
			{/* </div> */}
		</>
	);
};

export default DecoratedImage;
