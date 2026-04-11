import styled from "styled-components";

export const Img = styled.img`
	width: 100%;
	height: 210px;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-auto-rows: 1fr;
	padding: 1.2rem 0 0;
	align-items: stretch;
	justify-items: stretch;
	column-gap: 2.2rem;
	row-gap: 2.2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-template-columns: 1fr;
		padding: 0;
	}
`;
export const BlogCard = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(
		180deg,
		rgba(33, 45, 69, 0.42) 0%,
		rgba(26, 36, 56, 0.9) 100%
	);
	border: 1px solid rgba(255, 255, 255, 0.14);
	border-radius: 16px;
	text-align: left;
	width: 100%;
	height: 100%;
	min-height: 61rem;
	overflow: hidden;
	transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-5px);
		border-color: rgba(255, 255, 255, 0.24);
		box-shadow: 0 14px 30px rgba(6, 10, 20, 0.28);
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 100%;
		min-height: auto;
		width: 100%;
		max-width: 100%;
	}
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 1.8rem 2rem 2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 1.4rem 1.4rem 1.6rem;
	}
`;

export const TitleContent = styled.div`
	text-align: left;
	z-index: 20;
	width: 100%;
	color: white;
	padding: 0;
`;

export const HeaderThree = styled.h3`
	font-weight: 650;
	letter-spacing: 0.4px;
	color: #9cc9e3;
	padding: 0 0 0.7rem;
	font-size: ${(props) => (props.titles ? "3rem" : "2rem")};
	line-height: 1.2;
	min-height: 7.4rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.6rem;
		padding: 0 0 0.6rem;
		min-height: auto;
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
	width: 100%;
	height: 2px;
	margin: 0 0 1.4rem;
	border: 0;
	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
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
	padding: 0 0 1.4rem;
	color: #e4e6e7;
	font-size: 1.9rem;
	line-height: 3rem;
	text-align: left;
	min-height: 18rem;
	max-height: 18rem;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	overflow: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 0 1.2rem;
		font-size: 1.75rem;
		line-height: 2.8rem;
		min-height: auto;
		max-height: none;
		display: block;
	}
`;

export const StackTitle = styled.p`
	font-size: 1.3rem;
	font-weight: 700;
	letter-spacing: 0.8px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.66);
	margin: 0 0 0.9rem;
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 1.4rem 0 0;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	margin-top: auto;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 1.2rem 0 0;
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
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
	list-style: none;
	padding: 0 0 1.2rem;
	min-height: 7.2rem;
	max-height: 7.2rem;
	overflow: hidden;
	align-content: flex-start;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 0 1rem;
		min-height: auto;
		max-height: none;
		overflow: visible;
	}
`;
export const Tag = styled.a`
	border-radius: 999px;
	color: rgba(255, 255, 255, 0.8);
	display: inline-block;
	background: rgba(255, 255, 255, 0.08);
	height: auto;
	line-height: 24px;
	padding: 0.2rem 1rem;
	position: relative;
	margin: 0;
	text-decoration: none;
	-webkit-transition: color 0.3s;

	&:hover {
		background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
		color: white;
	}
`;

export const ActionButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.3);
	padding: 0.85rem 1.5rem;
	border-radius: 999px;
	color: rgba(255, 255, 255, 0.86);
	font-size: 1.35rem;
	font-weight: 600;
	transition: 0.3s ease;

	&:hover {
		background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
		border-color: transparent;
		color: white;
	}
`;
