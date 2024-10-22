const Footer = () => {
	const linkClasses = "hover:text-pink visited:text-blue underline";
	return (
		<div className="bg-background-light text-teal p-6 text-xs">
			<p>
				Icons from{" "}
				{
					<a href="https://icons8.com/" className={linkClasses}>
						Icons8
					</a>
				}{" "}
				and{" "}
				{
					<a href="https://www.svgrepo.com/" className={linkClasses}>
						SVG Repo
					</a>
				}
			</p>
			<p>
				Colour scheme inspired by a{" "}
				<a
					href="https://marketplace.visualstudio.com/items?itemName=NguyenHoangLam.beautiful-dracula"
					className={linkClasses}
				>
					Beautiful Dracula VSCode theme
				</a>
			</p>
		</div>
	);
};

export default Footer;
