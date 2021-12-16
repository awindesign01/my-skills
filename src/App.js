import "./App.scss";
import "./Sass/Main/Main.scss";
import Header from "./Layout/Header";
import MainRoutes from "./MainRoutes";

function App() {
	return (
		<nav className="App">
			<nav>
				<Header />
				<MainRoutes />
			</nav>
		</nav>
	);
}

export default App;
