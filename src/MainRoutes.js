import { Route, Routes } from "react-router-dom";
import Introduction from "./Pages/Introduction";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Links from "./Pages/Links";

const MainRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<Introduction />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/links" element={<Links />} />
		</Routes>
	);
};

export default MainRoutes;
