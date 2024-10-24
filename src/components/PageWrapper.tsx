import React from "react";
import { Footer } from ".";
import { NavBar } from ".";

type PageWrapperProps = {
	page: JSX.Element;
};

const PageWrapper = (props: PageWrapperProps) => {
	const { page } = props;
	return (
		<div className="w-dvw min-h-dvh p-0 bg-background text-purple flex flex-col">
			<NavBar />
			<div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-s md:text-base flex-grow">
				{page}
			</div>
			<Footer />
		</div>
	);
};

export default PageWrapper;
