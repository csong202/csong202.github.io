import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleClick = () => setIsExpanded(!isExpanded);

	const { pathname } = useLocation();
	const linkClassName =
		"h-full p-3 lg:px-5 hover:bg-black hover:text-pink border-b-solid border-b-4";
	const getResponsiveLinkClasses = (targetPath: string) => {
		return `${linkClassName} ${
			pathname === targetPath
				? !isExpanded
					? "border-pink"
					: "underline decoration-pink decoration-2"
				: ""
		} ${
			isExpanded || pathname !== targetPath
				? "border-background-nav hover:border-black"
				: ""
		}`;
	};

	const logo = <Link to="/">LONG LOGO</Link>;
	const links = (
		<>
			<Link
				className={`${getResponsiveLinkClasses("/about")}`}
				to="/about"
			>
				About
			</Link>
			<Link
				className={`${getResponsiveLinkClasses("/work-experience")}`}
				to="/work-experience"
			>
				Work Experience
			</Link>
			<Link
				className={`${getResponsiveLinkClasses("/projects")}`}
				to="/projects"
			>
				Projects
			</Link>
			<Link
				className={`${getResponsiveLinkClasses("/contact")}`}
				to="/contact"
			>
				Contact
			</Link>
		</>
	);

	useEffect(() => {
		function handleResize() {
			// setting isExpanded to false in case the window was resized while the nav menu was expanded
			if (isExpanded && window.innerWidth >= 640) {
				setIsExpanded(false);
			}
		}
		window.addEventListener("resize", handleResize);
	});

	return (
		<div className="sticky top-0">
			<div className="hidden sm:flex flex-row justify-between bg-background-nav text-teal">
				{/* TODO: add logo */}
				{logo}
				<div className="flex flex-row justify-between">{links}</div>
			</div>
			<div className="sm:hidden flex flex-row justify-between bg-background-nav text-teal p-3">
				{/* TODO: add logo */}
				{logo}
				{/* https://jacobhocker.medium.com/creating-an-animated-hamburger-menu-in-nextjs-tailwind-css-9e332d428811 */}
				<button
					onClick={handleClick}
					className="flex flex-col justify-center items-center"
				>
					<span
						className={`bg-blue block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
						isExpanded
							? "rotate-45 translate-y-1"
							: "-translate-y-0.5"
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
						isExpanded
							? "-rotate-45 -translate-y-1"
							: "translate-y-0.5"
					}`}
					></span>
				</button>
			</div>
			{isExpanded && (
				<div className="flex sm:hidden flex-col w-full bg-background-nav text-teal border-blue border-solid">
					{links}
				</div>
			)}
		</div>
	);
};

export default NavBar;
