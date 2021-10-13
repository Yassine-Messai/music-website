import styled from 'styled-components';
import { pink, white } from '../../Colors';
import { motion } from 'framer-motion';

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px --15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 1rem;
	padding: 0 15px;
	flex: 1;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const SmallColumn = styled(ContentColumn)`
	width: 100%;
	max-width: ${({ bigImage }) => (bigImage ? '40%' : '50%')};
`;

export const BigColumn = styled(ContentColumn)`
	width: 100%;
	max-width: ${({ bigImage }) => (bigImage ? '60%' : '50%')};
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 18px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
`;

export const Box = styled.span`
	background: #fefefe;
	padding: 10px;
	border-radius: 50px;
	color: black;

	> span {
		background: ${pink};
		padding: 5px 15px;
		border-radius: 50px;
		color: ${white};
		margin-right: 0.6rem;
	}
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? '#f7f8fa' : '#1c2237')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#a9b3c1' : '#1c2237')};
`;
