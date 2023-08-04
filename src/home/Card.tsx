import { CardTypes } from "../../utils/home";

const Card = ({ transaction, description }: CardTypes) => {
	return (
		<>
			<div className={`bg-[#0077B6] rounded-lg p-3 w-full`}>
				<h2 className="text-white text-xl font-bold">{transaction}</h2>
				<p className="font-thin text-white">{description}</p>
			</div>
			<div className={`bg-[#0096C7] rounded-lg p-3 w-full`}>
				<h2 className="text-white text-xl font-bold">{transaction}</h2>
				<p className="font-thin text-white">{description}</p>
			</div>
			<div className={`bg-[#48CAE4] rounded-lg p-3 w-full`}>
				<h2 className="text-white text-xl font-bold">{transaction}</h2>
				<p className="font-thin text-white">{description}</p>
			</div>
			<div className={`bg-[#90E0EF] rounded-lg p-3 w-full`}>
				<h2 className="text-white text-xl font-bold">{transaction}</h2>
				<p className="font-thin text-white">{description}</p>
			</div>
		</>
	);
};

export default Card;
