import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-md-12 ">
						<Jumbotron
							title="A warm Welcom!"
							description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ad reiciendis ratione maxime molestiae aliquam dicta ex aspernatur iusto corrupti officiis nesciunt assumenda, quis nostrum doloribus laborum natus in quibusdam."
							buttonLabel="Call to action!"
							buttonURL=""
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Card
							title="Card Title"
							description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
							buttonLabel="Find Out More!"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-md-3">
						<Card
							title="Card Title"
							description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
							buttonLabel="Find Out More!"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-md-3">
						<Card
							title="Card Title"
							description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
							buttonLabel="Find Out More!"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-md-3">
						<Card
							title="Card Title"
							description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
							buttonLabel="Find Out More!"
							buttonURL="https://reactjs.org/"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
