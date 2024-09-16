import React from "react";
import { NavBar } from ".";

type PageWrapperProps = {
	page: JSX.Element;
};

const PageWrapper = (props: PageWrapperProps) => {
	const { page } = props;
	return (
		<div className="w-dvw h-full p-0 bg-background text-purple">
			<NavBar />
			<div className="p-8 lg:p-12 xl:p-16">{page}</div>
		</div>
	);
};

export default PageWrapper;
