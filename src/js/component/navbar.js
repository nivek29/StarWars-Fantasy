import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		// Icon
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-jedi-order fa-3x" />
				</span>
			</Link>
			{/* Dropdown */}
			<div className="dropdown" style={{ marginRight: "50px" }}>
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					placeholder="Empty">
					Favorites <strong>{store.favoritos.length}</strong>
				</button>
				{/* Favorites list*/}
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favoritos.map((item, index) => {
						return (
							<div
								style={{
									overflowY: "scroll",
									justifyContent: "space-between"
								}}
								className="d-flex contaienr -fluid"
								key={index}>
								<p style={{ marginTop: "20px", marginLeft: "5px" }}>
									<strong>{item.name}</strong>
								</p>
								{/* Trash button */}
								<button
									style={{ background: "none", border: "none" }}
									onClick={() => actions.removeFavorite(item)}>
									<i className="fas fa-trash fa-1x" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
