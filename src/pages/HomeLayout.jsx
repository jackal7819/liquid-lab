import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const HomeLayout = () => {
	return (
		<div>
			<Navbar />
			<Wrapper>
				<Outlet />
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.section`
	width: var(--view-width);
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 2rem 2rem;
`;

export default HomeLayout;
