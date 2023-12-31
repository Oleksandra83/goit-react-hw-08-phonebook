import { styled as styles } from '@mui/material/styles';
import styled  from 'styled-components';
import Badge from '@mui/material/Badge';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	> h2 {
		color: ${props => props.theme.colors.primary};
		text-shadow: 0 -0.4px 0.4px #ffffff, 1px 1px 1px #000000b0;
		font-weight: 700;
	}
`;

export const StyledBadge = styles(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backroundColor: '#00b771',
		color: '#00b771',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}));