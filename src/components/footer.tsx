import BottomNavData from "../../utils/footer";
import NavButton from "./NavButton";

const Footer = () => {
	return (
		<footer className="w-full flex items-center justify-evenly gap-2 absolute bottom-0 left-0 right-0">
			{BottomNavData.map((val, index) => (
				<NavButton
					alt={val.alt}
					isActve={val.isActve}
					label={val.label}
					src={val.src}
					key={index}
				/>
			))}
		</footer>
	);
};

export default Footer;
