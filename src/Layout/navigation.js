import React from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { CgHome } from "react-icons/cg";
import ShowMenu from "../Components/ShowMenu";

const links = [
	{ to: "/", textLink: "Home", icon: <CgHome /> },
	{ to: "/about", textLink: "About", icon: <FaRegUser /> },
	{ to: "/skills", textLink: "Skills", icon: <FiCode /> },
];

const Header = () => {
	const [IsShow, setIsShow] = React.useState(false);

	return (
		<header className="header w-full h-[7vh] flex justify-between items-center">
			<nav className="nav_left block w-1/2 md:w-full h-full md:flex md:justify-between md:items-center">
				<nav className="nav_name w-full h-full pl-2 flex justify-start items-center">
					<Link to="/">
						<h1 className="m-0 text-2xl font-bold text-gray-700 tracking-wider">Ali Donyaee</h1>
					</Link>
				</nav>
				<nav className="nav_link hidden w-full lg:w-2/3 h-full md:block">
					<ul className="pr-2 h-full md:flex md:justify-between md:items-center">
						{links.map((i) => (
							<li key={i.to} className="font-bold tracking-wider">
								<NavLink
									to={i.to}
									className="bg-slate-700 mx-2 w-32 h-9 rounded-lg flex flex-row-reverse justify-center items-center"
									style={({ isActive }) => {
										return {
											transition: "all 150ms linear",
											color: isActive ? "#fff" : "rgb(55 ,65 ,81)",
											backgroundColor: isActive ? "rgb(55 ,65 ,81)" : "#fff",
											boxShadow: isActive
												? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
												: "none",
										};
									}}
								>
									<nav className="ml-2">{i.textLink}</nav>
									<nav>{i.icon}</nav>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</nav>
			<nav className="nav_right md:hidden w-1/2 md:w-0 h-full flex justify-end items-center">
				<button className="pr-2" onClick={() => setIsShow(!IsShow)}>
					{IsShow ? <ShowMenu /> : <FiMenu className="icon_menu h-full text-2xl text-gray-700" />}
				</button>
			</nav>
		</header>
	);
};

export default Header;
