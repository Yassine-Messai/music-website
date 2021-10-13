import React from 'react';
import { Button, Column, Container, Row, Section, TextWrapper } from '../../globalStyles';
import {
	FooterForm,
	FooterInput,
	FooterLogo,
	SocialIcon,
	WebsiteRights,
	FooterColumn,
	FooterSocialIcon,
	FooterRow,
	FooterLine,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/footerData';

function Footer() {
	return (
		<Section inverse padding="4rem 0 2rem">
			<Column justify="center" align="center" textAlign="center" mb="1.2rem" padding="1.2rem">
				<TextWrapper size="1.7rem" weight="500" mb="1.2rem">
					Stay tuned with the latest updates, news and trends
				</TextWrapper>
				<TextWrapper mb="1rem" spacing="1px">
					Professional news weekly, no spam
				</TextWrapper>
				<FooterForm>
					<FooterInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</FooterForm>
			</Column>
			<FooterRow>
				{footerData.map((el, index) => (
					<FooterColumn gap="0.5rem" key={index}>
						<TextWrapper weight="600" size="1.3rem" mb="0.4rem">
							{el.title}
						</TextWrapper>
						{el.links.map((link, linkIndex) => (
							<TextWrapper key={linkIndex}>{link}</TextWrapper>
						))}
					</FooterColumn>
				))}
			</FooterRow>
			<Container>
				<FooterLine>
					<FooterLogo to="/">
						<SocialIcon src="./logo.svg" />
						IMusic
					</FooterLogo>
					<WebsiteRights>IMusic © 2020</WebsiteRights>
					<Row justify="center" gap="2rem" align="center" width="240px">
						{footerSocialData.map((social, index) => (
							<FooterSocialIcon
								key={index}
								href="/"
								target="_blank"
								aria-label={social.name}
							>
								{social.icon}
							</FooterSocialIcon>
						))}
					</Row>
				</FooterLine>
			</Container>
		</Section>
	);
}

export default Footer;
