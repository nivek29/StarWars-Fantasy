import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PlanetList } from "../component/planetList.js";
import { PersonajesList } from "../component/personajesList.js";

export const Home = () => {
	return (
		<div className="container-fluid" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "scroll"
				}}>
				<PlanetList />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "scroll"
				}}>
				<PersonajesList />
			</div>
		</div>
	);
};
