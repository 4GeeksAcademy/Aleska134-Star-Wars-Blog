import React, { useContext }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/Star-wars-logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
			<p>
				<img className="ms-5" height="70px" src={starWarsLogo}/>
			</p>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo"> */}
					<div className="btn-group dropstart">
						<button type="button" className="btn btn-primary dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 
							{/* Aqui debe ir un contador para los favoritos que se van agregando */}
							<span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							
								{/* link al personaje */}
								{/* {store.favorites.map((item)=>{ */}
								{/* <Link to="/single/${character}/${item.id}"> */}
								<li className="dropdown-item">F {' '} <button className="btn btn-outline-link text-dark border border-none"><i className="fa-sharp fa-solid fa-trash"/></button> </li>
								 {/* })}  */}
								{/* <button className="btn btn-outline-link text-dark border border-none">
								 Debe ser dinamico, si se agrega a favoritos, se debe agregar a estos <lis> y se debe poder eliminar (solo mostrar el nombre y el link al personaje(etc))  */}
							{/* </Link> */}
						</ul>
					</div>

			</div>
		</nav>
	);
};
