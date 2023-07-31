import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

export const NavLink = styled(Link)`
	padding: 8px;
	border-radius: 4px;
	text-decoration: none;
	color: ${({ theme }) => theme.text};
	font-size: 14px;
	font-weight: 500;

	&:hover,
	&:focus {
		box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
	}

	&.active {
		outline: none;
		box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease-in-out;
		background-color: transparent;
		color: #388b6d;
		text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #000000b0;
		cursor: pointer;
	}
`;