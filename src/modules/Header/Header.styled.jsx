import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AppBar as HeaderBlock } from "@mui/material";

export const LinkNav = styled(NavLink)`
	padding: 8px 12px;
	border-radius: 4px;
	text-decoration: none;
	color: #000;
	font-weight: 500;

	&.active {
		color: #fff;
		background-color: #063a36;
	}
`;

export const AppBar = styled(HeaderBlock)`
	position: fixed;
	padding: 4px 8px;
	margin-bottom: 20px;
	background: #eaf5f2;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
		0 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	backdrop-filter: blur(3.5px);
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	margin-top: 16px;
`;

export const NavBlock = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	width: 100%;
`;

export const UserBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;