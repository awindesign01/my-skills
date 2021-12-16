import "../Sass/Main/Main.scss";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", textLink: "Introduction" },
	{ to: "/skills", textLink: "Skills" },
	{ to: "/projects", textLink: "Projects" },
	{ to: "/links", textLink: "Links" },
];

const Header = () => {
	return (
		<header className="header">
			<nav className="nav_left">
				<nav className="nav_name">
					<h1>Ali Donyaee</h1>
				</nav>
				<nav className="nav_link">
					<ul>
						{links.map((i) => (
							<li key={i.to}>
								<NavLink
									to={i.to}
									style={({ isActive }) => {
										return {
											transition: "all 300ms ease",
											color: isActive ? "#ffdd47" : "rgb(168, 161, 163)",
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
			<nav className="nav_right">
				<button>
					<FiMenu className="icon_menu" />
				</button>
			</nav>
		</header>
	);
};

export default Header;
