import cardData from "../../utils/home";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "./Card";

const Dashboard = () => {
	const cardColor: string[] = ["#0077B6", "#0096C7", "#48CAE4", "#90E0EF"];
	return (
		<>
			<Header />
			<main className="w-full p-4 flex flex-col items-center gap-2 justify-center">
				<p className="w-full text-start">Key Metrices</p>
				{cardData.map((val, index) => (
					<Card
						key={index}
						description={val.description}
						transaction={val.transaction}
						color={cardColor[index]}
					/>
				))}
			</main>
			<Footer />
		</>
	);
};

export default Dashboard;
