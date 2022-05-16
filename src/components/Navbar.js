import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/moonbots-logo.svg';
import twitterIcon from '../img/twitter-white.svg';
import { UserContext } from '../contextProviders/UserProvider';
import isEmpty from '../helpers/isEmpty';

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	const userContext = useContext(UserContext);

	const handleMenu = (e) => {
		if (['LI', 'A'].includes(e.target.nodeName)) {
			return setOpenNav(false);
		}

		const target = e.target.closest('button');

		if (!target) return;

		if (target.classList.contains('open')) {
			console.log('opne');
			return setOpenNav(true);
		}
		if (target.classList.contains('close')) {
			console.log('close');
			return setOpenNav(false);
		}
	};
	return (
		<div className="nav">
			<div className="logo-wrapper">
				<Link to="/">
					<img className="logo" src={logo} alt="moonbots logo" />
				</Link>
			</div>
			<div
				onClick={handleMenu}
				className={`main-menu ${openNav ? 'show' : ''}`}
			>
				<ul>
					<a href="/#customers">
						<li>Customers</li>
					</a>
					<a href="/#products">
						<li>Products</li>
					</a>
					<a href="/#about">
						<li>About us</li>
					</a>
					<a href="/#security">
						<li>Security</li>
					</a>
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
					<Link className="btn-cta" to="/signup">
						Sign-up
					</Link>
				</div>
				{openNav && (
					<button onClick={handleMenu} className="hamburger close">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				)}
			</div>
			{!openNav && (
				<button onClick={handleMenu} className="hamburger open">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default Navbar;
