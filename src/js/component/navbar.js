import React, { useContext, useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/Star-wars-logo.png";

export const  Navbar = (item,category,index) => {
	const { store, actions } = useContext(Context);

	const deleteFavorite = (itemName) =>{
			store.favorites.map((item,index) => {
				if (item.name === itemName){
					console.log('Este se debe eliminar -> ',itemName)
					store.favorites.splice(index,1)
				}
			})
			
		}

	return (
		
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
			<p>
				<img className="ms-5" height="70px" src={starWarsLogo}/>
			</p>
			</Link>
			<div className="ml-auto">
					<div className="btn-group dropstart">
						<button type="button" className="btn btn-primary dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 
							{/* El contador no se actualiza :.(  */}
							<span className="badge bg-secondary">
								{store.favorites.length}
							</span>
						</button>
						<ul className="dropdown-menu">	{store.favorites.map((item) => {
										return (
										// {/* link al personaje */}
										// <Link to={`/single/${category}/${index}`}> como pasar la categoria y hacer que se muestren cuando se agregan y eliminan
										<li key={index} className="dropdown-item">{item.name}
											<button className="btn btn-outline-link text-dark border border-none">
											<i className="fa-sharp fa-solid fa-trash" onClick={()=>{
                                				deleteFavorite(item.name)
                                				{console.log(store.favorites)}
                            				}}/>
											</button> 
										</li>
										//   </Link>
									)
									})}
						</ul>
					</div>
			</div>
		</nav>
	);
};
