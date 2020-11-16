import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import mapMarker from '../../../images/icons/map-marker.png';
import FooterCol from './FooterCol/FooterCol';
import facebookIcon from '../../../images/icons/facebook.png';
import linkedinIcon from '../../../images/icons/linkedin.png';
import youtubeIcon from '../../../images/icons/youtube.png';
import instagramIcon from '../../../images/icons/insta.png';

const Footer = () => {
	const company = [
		{ name: 'About', link: '/about' },
		{ name: 'Side Map', link: 'sidemap' },
		{ name: 'Support Center', link: 'support-center' },
		{ name: 'Terms And Conditions', link: 'terms-conditions' },
		{ name: 'Sumbit Lising', link: 'submit-lising' },
	];
	const quickLinks = [
		{ name: 'Quick Links', link: '/quick-links' },
		{ name: 'Rentals', link: '/rentals' },
		{ name: 'Sales', link: '/sales' },
		{ name: 'Contact', link: '/contact' },
		{ name: 'Terms Conditions', link: '/terms-conditions' },
		{ name: 'Our Blog', link: '/blog' },
	];

	return (
		<section>
			<Container>
				<Row>
					<Col lg={5}>
						<p className='contact-info'>
							<span>
								<img src={mapMarker} alt='' />
							</span>
							H#340 (4th Floor), Road #24,
							<br />
							New DOHS, Mohakhali, Dhaka, Bangladesh <br /> Phone:
							018XXXXXXXX <br /> E-mail: info@company.com
						</p>
					</Col>
					<Col lg={7}>
						<Row>
							<FooterCol
								key={2}
								menuTitle='Company'
								menuItems={company}
							/>
							<FooterCol
								key={3}
								menuTitle='Quick Links'
								menuItems={quickLinks}
							/>
							<Col xl={4}>
								<h6 className='menu-title'>About us</h6>
								<p className='footer-about-content'>
									We are the top real estate agency in Sydney,
									with agents available to answer any question
									24/7.
								</p>
								<div className='socila-menu'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.facebook.com'
									>
										<img src={facebookIcon} alt='' />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.instagram.com/'
									>
										<img src={instagramIcon} alt='' />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.linkedin.com/'
									>
										<img src={linkedinIcon} alt='' />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.youtube.com/'
									>
										<img src={youtubeIcon} alt='' />
									</a>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;
