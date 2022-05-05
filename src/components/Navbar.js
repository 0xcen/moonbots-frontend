import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/moonbots-logo.svg';
import twitterIcon from '../img/twitter-white.svg';
import { UserContext } from '../contextProviders/UserProvider';
import isEmpty from '../helpers/isEmpty';

const Navbar = () => {
	const userContext = useContext(UserContext);
	return (
		<div className="nav">
			<div className="logo-wrapper">
				<Link to="/">
					<img className="logo" src={logo} alt="moonbots logo" />
				</Link>
			</div>
			<ul className="main-menu">
				<a href="#customers">
					<li>Customers</li>
				</a>
				<a href="#products">
					<li>Products</li>
				</a>
				<a href="#about">
					<li>About us</li>
				</a>
				<a href="#contact">
					<li>Contact</li>
				</a>
				{/* <a href="#">
					<li>Pricing</li>
				</a> */}
				{userContext?.role === 'admin' ? (
					<Link to="/admin/dashboard">
						<li>Dashboard</li>
					</Link>
				) : null}
			</ul>
			<div className="nav-btns">
				<Link className="btn-login" to="/login">
					Login
				</Link>
				<Link className="btn-cta" to="/sign-up">
					Sign-up
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
