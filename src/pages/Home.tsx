import { ReactComponent as FolderIcon } from "../icons/folder.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as TextFileIcon } from "../icons/text-file.svg";

const Home = () => {
	const iconClasses = "size-6 fill-pink inline pr-2";

	const directory = (
		indent: number,
		icon: "home" | "folder" | "text",
		name: string
	) => (
		<div
			className={
				icon === "home"
					? "text-teal"
					: icon === "folder"
					? "text-blue"
					: ""
			}
		>
			<span>{"\u00A0\u00A0".repeat(indent)}</span>
			{icon === "home" ? (
				<HomeIcon className={iconClasses} />
			) : icon === "folder" ? (
				<FolderIcon className={iconClasses} />
			) : (
				<TextFileIcon className={iconClasses} />
			)}
			{name}
		</div>
	);

	return (
		<div className="w-full text-wrap break-words text-sm leading-7">
			{directory(0, "home", "christina_song")}
			{directory(1, "folder", "welcome_to_my_portfolio")}
			{directory(2, "text", "feel_free_to_explore")}
			{directory(2, "text", "my_projects_and_experience")}
			{directory(1, "folder", "searching_for")}
			{directory(2, "text", "full_time_software_dev_role")}
			{directory(2, "text", "starting_summer_2025")}
			{directory(2, "text", "willing_to_relocate")}
			{directory(1, "folder", "quick_summary")}
			{directory(2, "folder", "education")}
			{directory(3, "text", "university_of_ottawa")}
			{directory(3, "text", "bsc_honours_computer_science")}
			{directory(3, "text", "fourth_year")}
			{directory(2, "folder", "internships")}
			{directory(3, "text", "intuit_turbotax")}
			{directory(3, "text", "ciena")}
			{directory(3, "text", "sap")}
			{directory(3, "text", "aeponyx")}
			{directory(3, "text", "tbs_canada")}
			{directory(2, "folder", "skills")}
			{directory(3, "folder", "languages")}
			{directory(4, "text", "javascript_and_typescript")}
			{directory(4, "text", "java")}
			{directory(4, "text", "cpp_and_csharp")}
			{directory(4, "text", "python")}
			{directory(3, "folder", "frameworks")}
			{directory(4, "text", "react")}
			{directory(4, "text", "redux")}
			{directory(4, "text", "spring_boot")}
			{directory(4, "text", "aws_dynamodb")}
		</div>
	);
};

export default Home;
