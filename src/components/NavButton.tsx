import { BottomNavProps } from "../../utils/footer";

const NavButton = ({ src, label, alt, isActve }: BottomNavProps) => {
	return (
		<div className="flex flex-col items-center justify-center pb-2">
			<img src={src} alt={alt} />
			<p
				className={`text-sm font-medium ${
					isActve ? "text-blue-400" : "text-slate-400"
				}`}>
				{label}
			</p>
		</div>
	);
};

export default NavButton;
