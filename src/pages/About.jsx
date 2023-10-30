import styled from 'styled-components';

const About = () => {
	return (
		<Wrapper>
			<h3>About Us</h3>
			<p>
				Welcome to LiquidLab - your virtual bar designed to immerse you
				in the fascinating world of cocktail recipes and culinary
				experiments. At LiquidLab, we're passionately dedicated to
				curating and presenting the best recipes, aiming to provide you
				with unforgettable experiences and inspiration in the art of
				mixology.
			</p>
			<h3>Our Mission</h3>
			<p>
				LiquidLab is a project born out of a love for cocktail culture.
				Our primary objective is to offer you a wide array of exquisite
				drink recipes that will allow you to bring your boldest ideas to
				life and relish the unique taste of each cocktail.
			</p>
			<h3>What We Offer</h3>
			<p>
				Our platform presents a multitude of cocktail recipes of varying
				complexity, from classic masterpieces to new, original
				combinations of ingredients. You have the opportunity to easily
				find and select the cocktail that aligns with your taste
				preferences, fitting any occasion - whether it's a party, a
				romantic date, or simply an evening in a cozy setting.
			</p>
			<h3>What Sets Us Apart</h3>
			<p>
				LiquidLab is not just a collection of recipes; it's a source of
				inspiration for those who appreciate quality and original
				drinks. We consistently update our collection, adding new and
				unique cocktail ideas, ensuring that every user can feel like a
				true mixologist.
			</p>
			<p>
				Immerse yourself in a world of amazing aromas and flavors with
				LiquidLab - a place where everyone can become a creator of
				splendid cocktails!
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	text-align: center;

	p {
		line-height: 2;
		color: var(--grey-500);
		text-align: start;
	}
`;

export default About;
