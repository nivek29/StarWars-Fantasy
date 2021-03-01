import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.loadDetails(params.id, params.selected);
		},
		[params.id, params.selected]
	);
	return (
		!!store.details && (
			<div
				style={{
					maxWidth: "1000px",
					display: "flex",
					flexDirection: "column",
					alignSelf: "center"
				}}>
				<div className="card mb-3" style={{ display: "flex", flexDirection: "row", border: "none" }}>
					<div className="row g-0">
						<div className="col-md-6" style={{ display: "flex" }}>
							<img src="https://via.placeholder.com/400" className="img-fluid" alt=" " />
						</div>

						<div className="col-md-6 card-body" style={{ display: "flex", flexDirection: "column" }}>
							<h1 className="card-title" style={{ display: "flex", flexDirection: "row" }}>
								{store.details.properties.name}
							</h1>
							<p className="card-text" style={{ display: "flex", flexDirection: "row" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</div>
				<footer
					className="footer mt-auto py-3 text-center"
					style={{ display: "flex", flexDirection: "row", borderTop: "solid 2px red" }}>
					<div className="container">
						<div className="row">
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Population" : "Mass"}
								</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Climate" : "Birth Year"}
								</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Diameter" : "Eye Color"}
								</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Gravity" : "Gender"}
								</h4>
							</div>{" "}
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Orbital Period" : "Height"}
								</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "red" }}>
									{params.selected === "planetas" ? "Terrain" : "Skin Color"}
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.population
									: store.details.properties.mass}
							</div>
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.climate
									: store.details.properties.birth_year}
							</div>
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.diameter
									: store.details.properties.eye_color}
							</div>
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.gravity
									: store.details.properties.gender}
							</div>
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.orbital_period
									: store.details.properties.height}
							</div>
							<div className="col" style={{ color: "red" }}>
								{params.selected === "planetas"
									? store.details.properties.terrain
									: store.details.properties.skin_color}
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
