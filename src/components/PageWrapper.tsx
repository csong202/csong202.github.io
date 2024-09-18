import React from "react";
import { NavBar } from ".";

type PageWrapperProps = {
	page: JSX.Element;
};

const PageWrapper = (props: PageWrapperProps) => {
	const { page } = props;
	return (
		<div className="w-dvw min-h-dvh p-0 bg-background text-purple">
			<NavBar />
			<div className="p-8 lg:p-12 xl:p-16 text-s md:text-base">
				{page}
			</div>
		</div>
	);
};

export default PageWrapper;
