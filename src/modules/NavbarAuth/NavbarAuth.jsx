import React from 'react';
import { NavLink } from './NavbarAuth.styled';

const NavbarAuth = () => {
	return (
		<div>
			<NavLink to="/register">Registration</NavLink>|
			<NavLink to="/login">Login</NavLink>
		</div>
	);
};

export default NavbarAuth;