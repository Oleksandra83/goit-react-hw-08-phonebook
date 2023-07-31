import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import Header from "./Header/Header";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
	return (
		<>
			<Container>
				<Header />
				<main>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</main>
			</Container>
		</>
	);
};