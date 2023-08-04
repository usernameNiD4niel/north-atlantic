import Dashboard from "./home/Dashboard";

function App() {
	return (
		<>
			{/* Create a condition if user is authenticated */}
			<Dashboard />
			{/* If not show login or signup component */}
		</>
	);
}

export default App;
