import CocktailCard from './CocktailCard';
import { WrapperError } from '../pages/SinglePageError';

const CocktailsList = ({ drinks }) => {
	if (!drinks) {
		return (
			<WrapperError>
				<h3>No matching cocktails found...</h3>
			</WrapperError>
		);
	}

	return (
		<WrapperError>
			{drinks.map((drink) => (
				<CocktailCard key={drink.idDrink} {...drink} />
			))}
		</WrapperError>
	);
};

export default CocktailsList;
