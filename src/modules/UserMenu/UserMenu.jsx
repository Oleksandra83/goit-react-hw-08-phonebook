import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Avatar, Chip } from '@mui/material';
import { Wrapper, StyledBadge } from './UserMenu.styled';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();
	const handleLogOut = () => dispatch(logOutUser());

	return (
		<Wrapper>
			<h2>Welcome, {user.name}</h2>
			<Chip
				avatar={
					<StyledBadge
						overlap="circular"
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						variant="dot"
					>
						<Avatar
							alt="avatar"
							src={`https://cdn-icons-png.flaticon.com/512/6716/6716646.png?${user.name}`}
							sx={{ width: 24, height: 24 }}
						/>
					</StyledBadge>
				}
				label="LogOut"
				variant="outlined"
				onClick={handleLogOut}
				sx={{
					border: '1px solid #cedfdd',
					color: '#000',
					// textShadow: '-1px -1px 1px #888888b0, 1px 1px 1px #000000b0',
					boxShadow: 3,
				}}
					/>
		</Wrapper>
	);
};