import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PersonajesList = () => {
	const { store, actions } = useContext(Context);
	const select = "personajes";
	return store.personajes.map((item, i) => {
		return (
			<div
				key={i}
				style={{
					display: "flex",
					flexDirection: "row",
					maxWidth: "18rem",
					margin: "10px"
				}}>
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://via.placeholder.com/350x150" className="card-img-top" alt=" " />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>

						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between"
							}}>
							<Link className="btn btn-outline-primary" to={"/details/" + item.uid + "/" + select}>
								Learn more!
							</Link>
							<button
								type="button"
								className="btn btn-outline-warning"
								onClick={() => {
									actions.addFavorite(item);
								}}>
								<i className="far fa-heart fa-1x" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	});
};
