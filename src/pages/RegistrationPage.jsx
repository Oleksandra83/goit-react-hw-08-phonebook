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
import { registerUser } from 'redux/auth/authOperations';
import { useState } from 'react';

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#388b6d'
		},
	},
});

export default function Registration() {
	const dispatch = useDispatch();
	const location = useLocation();
	const onSignUp = location.pathname === '/register';
	const [empty, setEmpty] = useState({ name: false, email: false });
	const [passwordValid, setPasswordValid] = useState({ password: false });

	const handleSubmit = e => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const user = {
			name: data.get('name'),
			email: data.get('email'),
			password: data.get('password'),
		};

		if (user.name === '') {
			setEmpty(prev => ({ ...prev, name: true }));
			return;
		}
		if (user.email === '') {
			setEmpty(prev => ({ ...prev, email: true }));
			return;
		}
		if (user.password.length < 8 && user.password === '') {
			setPasswordValid(prev => ({ ...prev, password: true }));
			return;
		}

		dispatch(registerUser(user));
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid
				container
				component="main"
				sx={{
					height: '100vh',
					backgroundImage: `url("https://itechua.com/wp-content/uploads/2023/02/samsung-galaxy-s9-6-2.jpg")`,
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
						<Avatar sx={{ m: 1, backgroundColor: 'primary.main', boxShadow: 3 }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								color: '#245b47',
								// textShadow: '-1px -1px 1px #888888b0, 1px 1px 1px #000000b0',
							}}>
							SignUp
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="name"
										label="Name"
										autoComplete="given-name"
										name="name"
										autoFocus
										error={empty.name}
										sx={{ boxShadow: 3 }}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="email"
										label="Email Address"
										autoComplete="email"
										error={empty.email}
										sx={{ boxShadow: 3 }}
										helperText={
											'Example of valid email address: qwerty1@example.com'
										}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="password"
										name="password"
										label="Password"
										type="password"
										autoComplete="new-password"
										error={passwordValid.length < 8}
										sx={{ boxShadow: 3 }}
										onChange={e => setPasswordValid(e.target.value)}
										helperText={'Password should contains at least 8 sumbols'}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={
											<Checkbox value="allowExtraEmails" color="primary" />
										}
										label="I want to receive inspiration, marketing promotions and updates via email."
									/>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2, boxShadow: 3 }}
									>
										Sign Up
									</Button>
								</Grid>
							</Grid>
							<Grid>
								<Grid item>
									{onSignUp && (
										<Link to={`/login`} variant="body2">
											Already have an account? Sign in
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