import React from 'react';
import Content from '../../components/Content/Content';
import Hero from '../../components/Hero/Hero';
import Pricing from '../../components/Pricing/Pricing';
import { heroOne, heroTwo, heroThree } from '../../data/homeData';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Pricing />
		</>
	);
};

export default HomePage;
