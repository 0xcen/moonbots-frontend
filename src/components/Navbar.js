import React, { useContext, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../img/moonbots-logo.svg';
import { UserContext } from '../contextProviders/UserProvider';

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
			return setOpenNav(true);
		}
		if (target.classList.contains('close')) {
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
					<Link to="/#customers">
						<li>Customers</li>
					</Link>
					<Link to="/#products">
						<li>Products</li>
					</Link>
					<Link to="/#about">
						<li>About us</li>
					</Link>
					<Link to="/#security">
						<li>Security</li>
					</Link>
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
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
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
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default Navbar;
