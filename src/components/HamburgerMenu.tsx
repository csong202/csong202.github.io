type HamburgerMenuProps = {
	isExpanded: boolean;
	handleClick: () => void;
};

const HamburgerMenu = ({ isExpanded, handleClick }: HamburgerMenuProps) => {
	// https://jacobhocker.medium.com/creating-an-animated-hamburger-menu-in-nextjs-tailwind-css-9e332d428811
	return (
		<button
			onClick={handleClick}
			className="flex flex-col justify-center items-center"
		>
			<span
				className={`bg-blue block transition-all duration-300 ease-out 
        h-0.5 w-6 rounded-sm ${
			isExpanded ? "rotate-45 translate-y-1" : "-translate-y-0.5"
		}`}
			></span>
			<span
				className={`bg-blue block transition-all duration-300 ease-out 
        h-0.5 w-6 rounded-sm my-0.5 ${
			isExpanded ? "opacity-0" : "opacity-100"
		}`}
			></span>
			<span
				className={`bg-blue block transition-all duration-300 ease-out 
        h-0.5 w-6 rounded-sm ${
			isExpanded ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
		}`}
			></span>
		</button>
	);
};

export default HamburgerMenu;
