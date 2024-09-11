import { Headshot, NavBar } from "../components";

const About = () => {
	return (
		<div className="bg-background h-dvh w-dvw text-purple">
			<NavBar />
			<div className="flex flex-col md:flex-row justify-between p-6">
				<Headshot />
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>
	);
};

export default About;
