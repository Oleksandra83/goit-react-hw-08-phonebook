import React, { useState } from "react";
import { useAuth } from "hooks/useAuth";
import NavbarAuth from "modules/NavbarAuth/NavbarAuth";
import { UserMenu } from "modules/UserMenu/UserMenu";
import { Navigation } from "modules/Navigation/Navigation";
import Logo from "../../images/phonebook-icon.png";
import { Link } from "react-router-dom";
import { 
	Box,
	Divider,
	IconButton,
	Drawer,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Nav, AppBar, NavBlock, UserBlock } from "./Header.styled";

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#d9faf0'
		},
		secondary: {
			main: '#eaf5f2'
		},
	},
});

const Header = () => {
	const { isLoggedIn } = useAuth();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const mobileMenu = (
		<ThemeProvider theme={defaultTheme}>
			<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
				<Typography
					color="primary.main"
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						my: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Link to="/">
						<img src={Logo} alt="logo" width={48} />
					</Link>
				</Typography>
				<Divider />
				<Nav>
					<Navigation />
				</Nav>
			</Box>
		</ThemeProvider>
	);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box component={'header'} sx={{ position: 'relative', height: '44px' }}>
				<AppBar
					component={'nav'}
					sx={{
						background: '#f2fcf8',
						backdropFilter: 'blur(7.5px)',
						position: 'relative',
					}}
					elevation={6}
				>
					<Toolbar sx={{ justifyContent: 'space-between', }}>
						<IconButton
							aria-label="open drawer"
							edge="start"
							sx={{
								mr: 2,
								display: { sm: 'none' },
								color: '#388b6d',
							}}
							onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
						<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
							{isLoggedIn ? <UserMenu /> : <NavbarAuth />}
						</Box>
						<Typography
							variant="h6"
							component="div"
							sx={{ my: 2, display: { xs: 'none', sm: 'block' } }}>
							<Link to="/">
								<img src={Logo} alt="logo" width={48} />
							</Link>
						</Typography>
						<Box sx={{
							display: { xs: 'none', sm: 'flex' },
						}}
						>
							<NavBlock>
								<Navigation />
							</NavBlock>
						</Box>
						<Box sx={{
							display: { xs: 'none', sm: 'flex' },
						}}
						>
							<UserBlock>
								{isLoggedIn ? <UserMenu /> : <NavbarAuth />}
							</UserBlock>
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: '280px',
								background: '#f2fcf8',
								backdropFilter: 'blur(7.5px)',
							},
						}}
					>
						{mobileMenu}
					</Drawer>
				</Box>
				<Box>
					<Toolbar />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default Header;