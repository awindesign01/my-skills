import { TiArrowDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Introduction = () => {
	return (
		<section className="introduction w-full h-[93vh] text-gray-700 lg:flex lg:flex-row lg:justify-center lg:items-start">
			<nav className="nav__introduction_left w-full lg:w-3/5 h-1/2 lg:h-[95%]"></nav>
			<nav className="nav__introduction_right w-full lg:w-2/5 h-1/2 lg:h-[95%] flex flex-col justify-between items-center">
				<nav className="mx-auto w-[95%] h-[80%] flex flex-col justify-center items-start">
					<h1 className="my-2 text-xl font-bold text-red-400">Front-End Developer</h1>
					<h1 className="text-3xl xl:text-4xl font-bold">Hy! I Am Ali Donyaee </h1>
					<p className="my-6 md:w-3/5 lg:w-full text-sm text-gray-400 font-bold tracking-wider">
						Student of microbiology and interested in the field of web and programming, Programming
						is a new magic
					</p>
					<nav className="w-full h-16 flex justify-start items-center">
						<Link to="/about">
							<button className="w-32 h-12 rounded-xl bg-gray-700 text-white font-bold tracking-wider shadow-lg">
								About Me
							</button>
						</Link>
						<nav className="transform -rotate-90">
							<TiArrowDown className="mt-6 text-4xl animate-bounce" />
						</nav>
					</nav>
				</nav>
				<nav className="mx-auto w-[95%] h-[20%] lg:h-[10%] ">
					<nav className="w-1/3 md:w-1/5 lg:w-1/3 h-full flex justify-between items-center text-xl">
						<a href="https://www.instagram.com/awin.design/">
							<nav className=" w-10 h-10 grid place-items-center rounded-md bg-gray-700 text-white">
								<FaInstagram />
							</nav>
						</a>
						<a href="https://www.linkedin.com/in/ali-asghar-donyaee-54b596208/">
							<nav className="w-10 h-10 grid place-items-center rounded-md bg-gray-700 text-white">
								<FaLinkedinIn />
							</nav>
						</a>
						<a href="https://github.com/awindesign01">
							<nav className="w-10 h-10 grid place-items-center rounded-md bg-gray-700 text-white">
								<FaGithub />
							</nav>
						</a>
					</nav>
				</nav>
			</nav>
		</section>
	);
};

export default Introduction;
