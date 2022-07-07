import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
				<div className="container">
					<NavLink to="/" className="navbar-brand fw-bold fs-4">
						LA COLLECTION{' '}
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link active" aria-current="page">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/products" className="nav-link">
									Products
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="buttons">
							<NavLink to="/login" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in me-1"></i>
								login</NavLink>
							<NavLink to="/register" className="btn btn-outline-dark ms-2">
								<i className="fa fa-user-plus me-1"></i>
								Register</NavLink>
							<NavLink to="/cart" className="btn btn-outline-dark ms-2">
								<i className="fa fa-shopping-cart me-1"></i>
								Cart (0)</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
