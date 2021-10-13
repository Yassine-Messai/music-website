import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../globalStyles';

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 30px;
	color: #fff;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const FooterColumn = styled(Column)`
	margin: 1rem 2rem;
	@media screen and (max-width: 720px) {
		width: 30%;
		text-align: center;
	}
`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 40px;
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 24px;
`;

export const FooterForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FooterInput = styled.input`
	padding: 10px 20px;
	border-radius: 2px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;

	&::placeholder {
		color: #242424;
	}

	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 40px auto 0;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;
