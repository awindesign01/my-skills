import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

const links = [
	{ to: "/", textLink: "Introduction" },
	{ to: "/skills", textLink: "Skills" },
	{ to: "/projects", textLink: "Projects" },
	{ to: "/links", textLink: "Links" },
];

const Header = () => {
	return (
		<header className="header w-full h-16 lg:h-16 flex justify-between items-center">
			<nav className="nav_left block w-1/2 md:w-full h-full md:flex md:justify-between md:items-center">
				<nav className="nav_name w-full h-full pl-2 flex justify-start items-center">
					<h1 className="m-0 text-xl font-bold text-white tracking-wider">
						<Link to="/">Ali Donyaee</Link>
					</h1>
				</nav>
				<nav className="nav_link hidden w-full lg:w-3/5 h-full md:block">
					<ul className="pr-2 h-full md:flex md:justify-between md:items-center">
						{links.map((i) => (
							<li key={i.to} className="font-bold tracking-wider">
								<NavLink
									to={i.to}
									style={({ isActive }) => {
										return {
											borderRadius: "3px",
											color: isActive ? "#fff" : "#aaaa",
											borderBottom: isActive ? "2px solid #fff" : "none",
										};
									}}
								>
									{i.textLink}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</nav>
			<nav className="nav_right md:hidden w-1/2 md:w-0 h-full flex justify-end items-center">
				<button className="pr-2">
					<FiMenu className="icon_menu h-full text-2xl text-white" />
				</button>
			</nav>
		</header>
	);
};

export default Header;
