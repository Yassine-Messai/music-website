import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Section } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	BigColumn,
	SmallColumn,
	Box,
} from './ContentStyles.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Content = (props) => {
	const {
		primary,
		topLine,
		headline,
		description,
		buttonLabel,
		img,
		alt,
		start,
		bottomImg,
		linkTo,
		inverse,
		reverse,
		bigImage,
		id,
	} = props;

	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});

			return;
		}

		animation.start({
			opacity: 0,
			y: 30,
			transition: {
				duration: 0.2,
			},
		});
	}, [inView, animation]);

	return (
		<>
			<Section padding="160px 0" ref={ref} inverse={inverse} id={id}>
				<Container>
					<ContentRow reverse={reverse}>
						<SmallColumn bigImage={bigImage}>
							<TextWrapper>
								<TopLine
									initial={initial}
									transition={{ delay: 0.3, duration: 0.6 }}
									animate={animation}
								>
									{topLine.text && (
										<Box>
											<Box>{topLine.extraText}</Box>
											{topLine.text}
										</Box>
									)}
								</TopLine>
								<Heading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</Heading>
								<Subtitle
									initial={initial}
									transition={{ delay: 0.7, duration: 0.6 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>

								{bottomImg ? (
									<Img
										initial={initial}
										transition={{ delay: 1, duration: 0.6 }}
										animate={animation}
										alt=""
										src={bottomImg}
									/>
								) : (
									<Link to={linkTo}>
										<Button
											initial={initial}
											transition={{ delay: 1, duration: 0.6 }}
											animate={animation}
											inbig
											fontBig
											primary={primary}
										>
											{buttonLabel}
										</Button>
									</Link>
								)}
							</TextWrapper>
						</SmallColumn>
						<BigColumn
							initial={initial}
							transition={transition}
							animate={animation}
							bigImage={bigImage}
						>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</BigColumn>
					</ContentRow>
				</Container>
			</Section>
		</>
	);
};

export default Content;
