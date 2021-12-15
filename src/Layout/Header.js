import "../Sass/Main/Main.scss";
import { FiMenu } from "react-icons/fi";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav_left">
				<h1>Ali Donyaee</h1>
				{/* <nav className="nav_link">
               <ul>
                  <li>Home</li>
                  <li>Profile</li>
                  <li>About</li>
                  <li>Call</li>
               </ul>
            </nav> */}
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
