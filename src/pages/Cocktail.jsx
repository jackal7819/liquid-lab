import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { styled } from 'styled-components';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const cocktailLoader = async ({ params }) => {
	try {
		const { id } = params;
		const { data } = await axios.get(`${cocktailUrl}${id}`);
		return { data: data.drinks[0] };
	} catch (error) {
		return { error };
	}
};

const Cocktail = () => {
	const { data, error } = useLoaderData();
	if (error) {
		return <Navigate to='/' />;
	}

	const ingredients = Object.keys(data)
		.filter((key) => key.startsWith('strIngredient') && data[key])
		.map((key) => data[key]);

	return (
		<Wrapper>
			<header>
				<Link to='/' className='btn'>
					back home
				</Link>
				<h3>{data.strDrink}</h3>
			</header>
			<div className='drink'>
				<img
					src={data.strDrinkThumb}
					alt={data.strDrink}
					className='img'
				/>
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name :</span>
						{data.strDrink}
					</p>
					<p>
						<span className='drink-data'>category :</span>
						{data.strCategory}
					</p>
					<p>
						<span className='drink-data'>info :</span>
						{data.strAlcoholic}
					</p>
					<p>
						<span className='drink-data'>glass :</span>
						{data.strGlass}
					</p>
					<p>
						<span className='drink-data'>ingredients :</span>
						{ingredients?.join(', ')}
					</p>
					<p>
						<span className='drink-data'>instructions :</span>
						{data.strInstructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	header {
		text-align: center;
		margin-bottom: 3rem;
		.btn {
			margin-bottom: 1rem;
		}
	}
	.img {
		border-radius: var(--borderRadius);
	}
	.drink-info {
		padding-top: 2rem;
	}
	.drink p {
		font-weight: 700;
		text-transform: capitalize;
		line-height: 2;
		margin-bottom: 1rem;
	}
	.drink-data {
		margin-right: 0.5rem;
		background: var(--primary-200);
		padding: 0.25rem 0.5rem;
		border-radius: var(--borderRadius);
		color: var(--primary-500);
		letter-spacing: var(--letterSpacing);
	}
	@media (min-width: 992px) {
		.drink {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: 3rem;
			align-items: center;
		}
		.drink-info {
			padding-top: 0;
		}
	}
`;

export default Cocktail;
