import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
// import WorkSample from "./Pages/WorkSample";

const MainRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/skills" element={<Skills />} />
			{/* <Route path="/work-sample" element={<WorkSample />} /> */}
		</Routes>
	);
};

export default MainRoutes;
