import "./App.css";
import Header from "./Layout/Header";
import MainRoutes from "./MainRoutes";

function App() {
	return (
		<nav className="App mx-auto w-screen h-screen bg-gray-900">
			<nav className="nav_app mx-auto xl:w-[1280px]">
				<Header />
				<section className="section_main_routes">
					<MainRoutes />
				</section>
			</nav>
		</nav>
	);
}

export default App;
