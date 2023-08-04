import menu from "../assets/home/menu.svg";
import submit from "../assets/home/submit.svg";
import { useState } from "react";
import "../index.css";

const Header = () => {
	const [isShowing, setIsShowing] = useState(false);
	const [isSideNavShowing, setIsSideNavShowing] = useState(false);
	const [searchedText, setSearchedText] = useState("");

	const onClick = () => {
		setIsShowing((prev) => !prev);
	};

	const onSearched = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setIsShowing(false);
		const targetElement = e.target as HTMLElement;
		setSearchedText(targetElement.textContent!);
	};

	const searchable: string[] = ["Summary", "History"];

	return (
		<header className="bg-[#0077B6] flex flex-col items-center gap-4 p-5 justify-center w-full">
			<nav className="flex items-center justify-center w-full">
				<h1 className="font-light text-xl flex-1 text-white text-center">
					NORTH ATLANTIC
				</h1>
				<button onClick={() => setIsSideNavShowing((prev) => !prev)}>
					<img src={menu} alt="Menu Image" className="w-8" />
				</button>
				<ul
					className={`w-[70%] absolute side-nav bg-slate-300 space-y-4 px-2 h-screen py-6 ${
						isSideNavShowing ? "block" : "hidden"
					}`}>
					<li onClick={() => setIsSideNavShowing(false)} className="flex gap-2">
						<img src="src/assets/back.svg" alt="Back image" />
						<h3 className="text-2xl font-medium text-[#0077B6]">MENU</h3>
					</li>
					<li
						className="side-item-btn bg-[#0077B6] p-3 rounded-[20px] text-white"
						onClick={() => setIsSideNavShowing(false)}>
						Dashboard
					</li>
					<li className="side-item-btn p-3">Supplier Management</li>
					<li className="side-item-btn p-3">Customer Management</li>
					<li className="side-item-btn p-3">Sales Agent Management</li>
					<li className="side-item-btn p-3">Inventory Officer Management</li>
					<li className="side-item-btn p-3">Inventory Management</li>
				</ul>
			</nav>
			<form className="relative w-full px-4">
				<input
					type="text"
					placeholder="Report Type"
					className="text-sm pl-2 pr-12 py-3 w-full rounded bg-white"
					onClick={() => onClick()}
					value={searchedText}
					onChange={(e) => setSearchedText(e.target.value)}
				/>
				<button
					type="submit"
					className="absolute right-6 top-0  bottom-0 flex items-center justify-center">
					<div className="w-[1px] bg-slate-300 h-full mr-2" />
					<img src={submit} alt="Submit" />
				</button>
				<ul
					className={`right-14 bg-white h-10 absolute -bottom-10 left-4 ${
						isShowing ? "block" : "hidden"
					}`}>
					{searchable.map((val, index) => (
						<li key={index} onClick={onSearched}>
							{val}
						</li>
					))}
				</ul>
			</form>
		</header>
	);
};

export default Header;
