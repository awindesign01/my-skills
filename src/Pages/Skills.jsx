const skills = [
	{
		skill: "Html",
		level: "advanced level",
		text: "basic, general concepts - all tags - Haml (advanced level)",
	},
	{
		skill: "Css",
		level: "advanced level",
		text: "basic, general concepts - flex - grid - Responsive",
		library:
			"SASS(advanced level)-library tailwind css(advanced level) - bootstrap(medium level) - animations library.",
	},
	{
		skill: "JavaScript",
		level: "advanced level",
		text: "basic, general concepts - operators - condition - loop -  object - array - function - html DOM - OOP - callback - AJAX - api - json.",
		library: "library jQuery - axios - animations.",
	},
	{
		skill: "React.Js",
		level: "mid level",
		text: "basic, general concepts - class, functional components - hooks - http request",
		library:
			"SPA - library Redux (medium level) - Redux-tollkit (mid level) - Redux-saga(mid level) - axios - json server - formik (advanced level) - lodash - yup - material ui - ant design.",
	},
];

const Links = () => {
	return (
		<nav className="p-2 w-full h-[93vh]">
			<ul className="mx-auto w-full md:w-1/2 h-auto font-bold tracking-wide flex flex-col items-start">
				{skills.map((s) => (
					<>
						<li className="mt-8 mb-2 w-full">
							<nav className="p-4 w-full bg-white rounded-xl shadow-lg border-b-2 border-gray-700">
								<p className="mb-2 text-base">
									{s.skill} ({s.level})
								</p>
								<h1 className="text-gray-500 text-sm">{s.text}</h1>
								<p className="text-gray-500 text-sm">{s.library}</p>
							</nav>
						</li>
						<hr className="mt-4 mx-auto w-2/5 h-[2px] bg-gray-300"/>
					</>
				))}
			</ul>
		</nav>
	);
};

export default Links;
