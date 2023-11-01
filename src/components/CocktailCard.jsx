import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const CocktailCard = ({ drink }) => {
	return (
		<Wrapper>
			<div className='img-container'>
				<img
					src={drink.strDrinkThumb}
					alt={drink.strDrink}
					className='img'
				/>
			</div>
			<div className='footer'>
				<h4>{drink.strDrink}</h4>
				<h5>{drink.strGlass}</h5>
				<p>{drink.strAlcoholic}</p>
				<Link to={`/cocktail/${drink.idDrink}`} className='btn'>
					details
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--grey-100);
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: var(--borderRadius);
	&:hover {
		box-shadow: var(--shadow-4);
	}
	img {
		height: 15rem;
		border-top-left-radius: var(--borderRadius);
		border-top-right-radius: var(--borderRadius);
	}
	.footer {
		padding: 1.5rem;
		h4,
		h5 {
			margin-bottom: 0.5rem;
		}
		h4 {
			font-weight: 700;
		}
		p {
			margin-bottom: 1rem;
			color: var(--grey-500);
		}
	}
`;

export default CocktailCard;
