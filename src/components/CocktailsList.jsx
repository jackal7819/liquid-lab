import CocktailCard from './CocktailCard';
import { WrapperError } from '../pages/SinglePageError';
import { styled } from 'styled-components';

const CocktailsList = ({ drinks }) => {
	if (!drinks) {
		return (
			<WrapperError>
				<h3>No matching cocktails found...</h3>
			</WrapperError>
		);
	}

	return (
		<Wrapper>
			{drinks.map((drink) => (
				<CocktailCard key={drink.idDrink} {...drink} drink={drink} />
			))}
		</Wrapper>
	);
};

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
        
`;

export default CocktailsList;
