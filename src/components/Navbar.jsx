import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">Bookings</Link>
			</div>
			<div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
				<ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/bookings">My Bookings</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-toggle">
				<button onClick={() => setIsOpen(!isOpen)}>
					<MenuIcon />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
