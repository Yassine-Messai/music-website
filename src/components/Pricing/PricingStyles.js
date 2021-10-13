import styled from 'styled-components';
import { pink, orange } from '../../Colors';
import { Heading, TextWrapper } from '../../globalStyles';

export const PricingSection = styled.div`
	padding: 50px 0 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingHeading = styled(Heading)`
	font-size: 3rem;
	margin-bottom: 24px;
	color: ${pink};
`;

export const PriceSubtitle = styled.h1`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	color: #fff;
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		background-color: transparent;
		border: 2px solid ${pink};
		margin-top: auto;

		&:hover {
			border: none;
		}
	}

	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
	color: ${orange};
`;

export const PricingCardCost = styled(TextWrapper)`
	font-size: 1.2rem;
`;

export const PricingCardText = styled(TextWrapper)`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;
