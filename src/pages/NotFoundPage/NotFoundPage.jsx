import React from 'react';
import NotFound from '../../images/404.png';
import { Wrapper, PageNotFound} from './NotFoundPage.styled';

export default function NotFoundPage() {
	return (
		<Wrapper role="alert">
			<PageNotFound src={NotFound} width="360" alt="404 Page not found" />
		</Wrapper>
	);
}