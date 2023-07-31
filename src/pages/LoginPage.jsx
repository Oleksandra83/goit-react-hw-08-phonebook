import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import { useState } from 'react';

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#fff'
		},
	},
});

export default function Login() {
	const dispatch = useDispatch();
	const location = useLocation();
	const onSignIn = location.pathname === '/login';

	const [empty, setEmpty] = useState({ email: false, password: false });

	const handleSubmit = e => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const user = {
			email: data.get('email'),
			password: data.get('password'),
		};

		if (user.email === '') {
			setEmpty(prev => ({ ...prev, email: true }));
			return;
		}
		if (user.password === '') {
			setEmpty(prev => ({ ...prev, password: true }));
			return;
		}

		dispatch(logInUser(user));
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid
				container
				component="main"
				sx={{
					height: '100vh',
					backgroundImage: `url("https://s.mind.ua/img/forall/a/202340/97.jpg?update=1638991009")`,
					backgroundRepeat: 'no-repeat',
					backgroundColor: t =>
						t.palette.mode === 'light'
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<CssBaseline />
				<Grid item xs={false} sm={6} md={7} />
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					component={Paper}
					elevation={24}
					square
					sx={{
						height: '100vh',
						background: '#ecf8f4',
						backdropFilter: 'blur(7.5px)',
					}}>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<Avatar sx={{
							m: 1,
							backgroundColor: 'primary.main',
							boxShadow: 3,
							color: '#000000b0',
						}}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								color: '#245b47',
								// textShadow: '-1px -1px 1px #888888b0, 1px 1px 1px #000000b0',
							}}>
							SignIn
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}>
							<Grid container spacing={2}>
								<TextField
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email Address"
										autoComplete="email"
										name="email"
										autoFocus
										error={empty.email}
										sx={{ boxShadow: 3 }}
									/>
								<TextField
										margin="normal"
										required
										fullWidth
										id="password"
										name="password"
										label="Password"
										type="password"
										autoComplete="current-password"
										error={empty.password}
										sx={{ boxShadow: 3 }}
									/>
									<FormControlLabel
										control={
											<Checkbox value="remember" color="primary" />
										}
										label="Remember me"
									/>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2, boxShadow: 3 }}
									>
										Sign In
									</Button>
								</Grid>
								<Grid container>
									<Grid item xs>
										<Link href="#" variant="body2">
										Forgot password?
										</Link>
									</Grid>
									<Grid item>
										{onSignIn && (
										<Link to={`/register`} variant="body2" color="primary">
											{"Don't have an account? Sign Up"}
										</Link>
									)}
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}