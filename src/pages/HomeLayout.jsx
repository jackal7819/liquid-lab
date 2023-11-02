import { Outlet, useNavigation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { styled } from 'styled-components';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';

	return (
		<div>
			<Navbar />
			<Wrapper>
				{isLoading ? <div className='loading' /> : <Outlet />}
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
