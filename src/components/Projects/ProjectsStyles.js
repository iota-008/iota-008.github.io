import styled from "styled-components";

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	display: grid;
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: auto;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
	color: white;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 1rem 0.5rem;
	font-size: ${(props) => (props.titles ? "3rem" : "2rem")};
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 1rem 3rem;
	}
`;

export const HeaderFour = styled.h4`
	font-weight: 100;
	letter-spacing: 1px;
	color: #9cc9e3;
	padding: 1rem 0.5rem;
	font-size: ${(props) => (props.titles ? "2rem" : "1rem")};
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem 1.5rem;
	}
`;

export const Hr = styled.hr`
	width: 80%;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #d0bb57;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: "Droid Serif", serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 10px 50px 20px 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 4rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	justify-content: space-around;
	margin: 2.5rem 0;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0rem 1rem;
	}
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	transition: 0.5s;
	&:hover {
		background: #801414;
	}
`;

export const TagList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	list-style: none;
	padding: 20px 10px;
`;
export const Tag = styled.a`
	border-radius: 3px 0 0 3px;
	color: #999;
	display: inline-block;
	clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
	height: auto;
	line-height: 26px;
	padding: 0 20px 0 23px;
	position: relative;
	margin: 5px auto;
	text-decoration: none;
	-webkit-transition: color 0.3s;

	&::before {
		background: #0f1624;
		border-radius: 10px;
		-webkit-box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
		box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
		content: "";
		height: 6px;
		left: 10px;
		position: absolute;
		width: 6px;
		top: 10px;
	}
	&::after {
		content: "";
		background: #0f1624;
	}
	&:hover {
		background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
		color: white;
	}
	&:hover::before {
		background: #fff;
	}
`;
