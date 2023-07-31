import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from '../components/Section/Section';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Presentation } from "../components/Presentation/Presentation";

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#035533'
		},
		secondary: {
			main: '#d9faf0'
		},
	},
});

const Home = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid
				container
				component="main"
				sx={{
					height: '100vh',
					backgroundImage: `url("https://d3pbdh1dmixop.cloudfront.net/readdle/Blog/transfer-contacts-from-iphone-to-iphone/transfer%20contacts%20from%20iphone%20to%20iphone.png")`,
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
						<Grid container spacing={2}>
							<Section title="Welcome to Phonebook!">
								<Presentation text="The PhoneBook program is designed for storing, organizing, and managing contacts.
									The main goal is to help users save information about their contacts quickly and
									conveniently. The main features present in the PhoneBook application include:
									Adding contacts: Users can add new contacts to the phonebook, including information
									such as name, phone number, email address, etc.
									Editing contacts: Users can change contact information or update their contact details,
									such as phone numbers or addresses.
									Contact search: The program allows users to quickly find the desired contact, providing
									the ability to search by name, phone number, or other criteria.
									Deleting contacts: Users can remove contacts that are no longer needed from their phonebook.
									The PhoneBook application is useful for organizing personal and professional contacts, as well
									as providing quick access to certain contacts when needed. It helps keep information about people
									in one place, reducing the risk of losing important data, and facilitating communication with
									acquaintances, colleagues, and friends."
								/>
							</Section>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Home;