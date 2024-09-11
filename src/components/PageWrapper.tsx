import React from "react";
import { NavBar } from ".";

const PageWrapper = (page: JSX.Element) => {
	return (
		<div className="w-full h-full p-0 bg-background text-purple">
			<NavBar />
			{page}
		</div>
	);
};

export default PageWrapper;
