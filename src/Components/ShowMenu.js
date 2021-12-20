import React from "react";
import { CgHome } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FiCode, FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", textLink: "Home", icon: <CgHome /> },
	{ to: "/about", textLink: "About", icon: <FaRegUser /> },
	{ to: "/skills", textLink: "Skills", icon: <FiCode /> },
];

const ShowMenu = () => {
	return (
		<div className="w-screen h-screen fixed top-0 right-0 bg-black bg-opacity-50 flex justify-end">
			<div className="w-1/2 h-full bg-white">
				{/* {links.map(i => (

            ))} */}
				<div className="w-full h-12 flex justify-end items-center">
               <FiPlus className="mr-2 text-3xl font-bold transform rotate-45"/>
            </div>
				<div className="w-full h-auto flex flex-col justify-between items-end ">
					{links.map((i) => (
						<li key={i.to} className="my-2 font-bold tracking-wider list-none">
							<NavLink
								to={i.to}
								className="bg-slate-700 mx-2 w-32 h-9 rounded-lg flex flex-row-reverse justify-center items-center"
								style={({ isActive }) => {
									return {
										transition: "all 150ms linear",
										color: isActive ? "#fff" : "rgb(55 ,65 ,81)",
										backgroundColor: isActive ? "rgb(55 ,65 ,81)" : "#fff",
										boxShadow: isActive
											? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
											: "none",
									};
								}}
							>
								<nav className="ml-2">{i.textLink}</nav>
								<nav>{i.icon}</nav>
							</NavLink>
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShowMenu;
