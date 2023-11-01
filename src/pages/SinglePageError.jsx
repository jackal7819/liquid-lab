import { styled } from 'styled-components';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
	const error = useRouteError();
	return (
		<Wrapper>
			<h3>{error.message}</h3>
		</Wrapper>
	);
};

export const WrapperError = styled.section`
	h3 {
		line-height: 1.5;
		color: var(--grey-500);
		margin-top: 5rem;
		text-align: center;
	}
`;

export default SinglePageError;
