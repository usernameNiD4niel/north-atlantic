import { CardTypes } from "../../utils/home";

const Card = ({ transaction, description, color }: CardTypes) => {
	return (
		<div className={`bg-[${color}] rounded-lg p-3 w-full`}>
			<h2 className="text-white text-xl font-bold">{transaction}</h2>
			<p className="font-thin text-white">{description}</p>
		</div>
	);
};

export default Card;
