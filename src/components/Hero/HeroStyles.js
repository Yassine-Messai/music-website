import styled from 'styled-components';
import { Row, Section } from '../../globalStyles';
import { orange } from '../../Colors';

export const HeroSection = styled(Section)`
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
		url('/images/hero2.jpg');
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	display: flex;

	@media screen and (max-width: 768px) {
		padding-top: 120px;
	}
`;

export const ButtonContainer = styled(Row)`
	justify-content: center;
	flex-flow: wrap;

	button {
		background-color: transparent;
		margin: 0 0.3rem;
	}
	button:nth-child(1) {
		border: 2px solid ${orange};

		&:hover {
			border: 2px solid transparent;
		}
	}

	button:nth-child(2) {
		padding: 8px 32px;

		display: flex;
		align-items: center;

		&:hover {
			background-color: transparent;
			color: ${orange};
		}
		> svg {
			margin-right: 0.4rem;
		}
	}
`;
