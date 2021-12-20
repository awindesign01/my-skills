import { FaRegUser } from "react-icons/fa";

const Skills = () => {
	return (
		<nav className="mx-auto w-[95%] h-[93vh] grid place-items-center">
			<nav className="shadow-lg shadow-gray-400 p-2 w-full md:w-[60%] lg:w-[50%] h-3/5 md:h-[30%] lg:h-[25%] xl:h-1/5 2xl:h-1/3 bg-gray-700 rounded-xl md:flex md:justify-between md:items-center">
				<nav className="p-[2px] w-full md:w-1/3 h-1/3 md:h-full grid place-items-center">
					<nav className="w-1/3 md:w-28 xl:w-32 h-full md:h-28 xl:h-32 bg-white rounded-full grid place-items-center">
						<FaRegUser className="text-5xl text-gray-700" />
					</nav>
				</nav>
				<nav className="p-2 w-full md:2/3 h-2/3 md:h-full text-white text-center md:text-left flex flex-col justify-around">
					<h1 className="text-3xl  font-bold tracking-wider">Ali Donyaee</h1>
					<nav className="my-4 flex flex-col justify-between">
						<ul>
							<li>
								<p className="mb-1 text-sm font-bold tracking-wider text-gray-400">
									Born : Nov/24/2001
								</p>
							</li>
							<li>
								<p className="my-1 text-sm font-bold tracking-wider text-gray-400">
									Education : Masters MicrobioLogy
								</p>
							</li>
							<li>
								<p className="mt-1 text-sm font-bold tracking-wider text-gray-400">
									Address : West Azerbaijan, Urmia
								</p>
							</li>
						</ul>
					</nav>
					<nav className="mx-auto w-auto md:w-full h-14 text-sm font-bold tracking-wider text-gray-400 flex flex-col justify-between items-start">
						<p>(+98)-936-446-0181</p>
						<p>(+98)-914-842-6142</p>
						<p></p>
					</nav>
				</nav>
			</nav>
		</nav>
	);
};

export default Skills;
