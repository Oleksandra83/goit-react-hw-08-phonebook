import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "modules/SharedLayout";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route
						path="register"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={<RegistrationPage />}
							/>
						}
					/>
					<Route
						path="login"
						element={<RestrictedRoute
							redirectTo="/contacts"
							component={<LoginPage />}
						/>
						}
					/>
					<Route
						path="contacts"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<ContactsPage />}
							/>
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default UserRoutes;