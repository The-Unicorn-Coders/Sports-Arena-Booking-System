import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import './Footer.css';

const Footer = () => {
return (
	<Box className="Box">
	<Container>
		<Row>
		<Column>
			<Heading>Home</Heading>
			<FooterLink href="#">Quick Booking</FooterLink>
			<FooterLink href="#">Search By Sport</FooterLink>
			<FooterLink href="#">Top Rated Arenas</FooterLink>
      <FooterLink href="#">Newly Added Arenas</FooterLink>
		</Column>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Quick Booking</FooterLink>
			<FooterLink href="#">Search By Sport</FooterLink>
			<FooterLink href="#">Top Rated Arenas</FooterLink>
			<FooterLink href="#">Newly Added Arenas</FooterLink>
		</Column>
		<Column>
			<Heading>Help</Heading>
			<FooterLink href="#">Quick Booking</FooterLink>
			<FooterLink href="#">Search By Sport</FooterLink>
			<FooterLink href="#">Top Rated Arenas</FooterLink>
			<FooterLink href="#">Newly Added Arenas</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
