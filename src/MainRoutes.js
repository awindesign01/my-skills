import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";

const MainRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/skills" element={<Skills />} />
		</Routes>
	);
};

export default MainRoutes;
