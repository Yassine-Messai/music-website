import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Container } from '../../globalStyles';
import { pink, orange } from '../../Colors';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: ${({ background }) => (background ? '#101522' : 'transparent')};
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;

	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 100;
`;

export const NavIcon = styled.img`
	margin-right: 0.5rem;
	width: 3rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 100;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		padding-top: 80px;
		top: ${({ show }) => (show ? 0 : '-100vh')};
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	margin-left: auto;

	button {
		background-color: transparent;
		border-radius: 5px;
		border: 2px solid ${orange};

		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&.active {
		border-bottom: 2px solid #ebc214;
	}
	&:hover {
		border-bottom: 2px solid ${pink};
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
