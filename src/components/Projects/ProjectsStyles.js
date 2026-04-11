import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(14px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const ProjectGroup = styled.div`
	margin-top: 2.8rem;
`;

export const ProjectGroupTitle = styled.h3`
	font-size: 2.4rem;
	line-height: 3rem;
	font-weight: 700;
	color: rgba(255, 255, 255, 0.94);
	margin: ${(props) => (props.$spaced ? "3rem 0 0.6rem" : "0 0 0.6rem")};
`;

export const ProjectGroupCopy = styled.p`
	font-size: 1.6rem;
	line-height: 2.6rem;
	color: rgba(255, 255, 255, 0.64);
	margin: 0 0 1.4rem;
`;

export const ProjectList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
`;

export const ProjectPanel = styled.article`
	display: grid;
	grid-template-columns: 280px 1fr;
	gap: 1.6rem;
	padding: 1.6rem;
	border-radius: 16px;
	background: linear-gradient(
		180deg,
		rgba(33, 45, 69, 0.42) 0%,
		rgba(26, 36, 56, 0.9) 100%
	);
	border: 1px solid
		${(props) =>
			props.$featured ? "rgba(19, 173, 199, 0.36)" : "rgba(255, 255, 255, 0.14)"};
	transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-3px);
		border-color: ${(props) =>
			props.$featured ? "rgba(19, 173, 199, 0.6)" : "rgba(255, 255, 255, 0.28)"};
		box-shadow: 0 12px 24px rgba(6, 10, 20, 0.22);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: 220px 1fr;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-template-columns: 1fr;
		padding: 1.3rem;
		gap: 1.2rem;
	}
`;

export const ProjectImageWrap = styled.div`
	border-radius: 12px;
	overflow: hidden;
	align-self: stretch;
	background: rgba(8, 12, 24, 0.4);
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	min-height: 190px;
	object-fit: cover;
	display: block;

	@media ${(props) => props.theme.breakpoints.sm} {
		min-height: 170px;
	}
`;

export const ProjectTitleRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.8rem;
	margin-bottom: 0.7rem;
`;

export const ProjectTitle = styled.h4`
	font-size: 3rem;
	line-height: 1.2;
	font-weight: 650;
	letter-spacing: 0.3px;
	color: #9cc9e3;
	margin: 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.5rem;
	}
`;

export const ProjectTypeBadge = styled.span`
	padding: 0.35rem 0.8rem;
	border-radius: 999px;
	font-size: 1.1rem;
	font-weight: 700;
	letter-spacing: 0.4px;
	text-transform: uppercase;
	background: rgba(10, 16, 32, 0.72);
	border: 1px solid rgba(19, 173, 199, 0.54);
	color: rgba(210, 240, 255, 0.95);
`;

export const ProjectDescription = styled.p`
	margin: 0 0 1rem;
	color: #e4e6e7;
	font-size: 1.85rem;
	line-height: 2.95rem;
	text-align: left;
`;

export const ProjectTags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	list-style: none;
	padding: 0;
	margin: 0 0 1.1rem;
`;

export const ProjectTag = styled.span`
	border-radius: 999px;
	color: rgba(255, 255, 255, 0.82);
	display: inline-block;
	background: rgba(255, 255, 255, 0.08);
	line-height: 24px;
	padding: 0.2rem 1rem;
	font-size: 1.4rem;
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 1rem 0 0;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	margin: 0;
	flex-wrap: wrap;
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
	overflow: hidden;
	cursor: pointer;
	transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-5px);
		border-color: rgba(255, 255, 255, 0.24);
		box-shadow: 0 14px 30px rgba(6, 10, 20, 0.28);
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 210px;
	object-fit: contain;
	object-position: center;
	background: rgba(12, 18, 34, 0.92);
	overflow: hidden;
	animation: ${slideIn} 0.38s ease;
`;

export const TitleContent = styled.div`
	text-align: left;
	z-index: 20;
	width: 100%;
	color: white;
	padding: 0;
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

export const HeaderThree = styled.h3`
	font-weight: 650;
	letter-spacing: 0.4px;
	color: #9cc9e3;
	padding: 0 0 0.7rem;
	font-size: ${(props) => (props.titles ? "3rem" : "2rem")};
	line-height: 1.2;
	min-height: 7.2rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin: 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		min-height: auto;
		display: block;
	}
`;

export const ProjectUpdated = styled.p`
	font-size: 1.25rem;
	font-weight: 600;
	letter-spacing: 0.3px;
	color: rgba(255, 255, 255, 0.62);
	margin: 0 0 0.85rem;
`;

export const HeaderFour = styled.h4`
	font-weight: 100;
	letter-spacing: 1px;
	color: #9cc9e3;
	padding: 0 0 0.8rem;
	font-size: ${(props) => (props.titles ? "2rem" : "1rem")};
	margin: 0;
`;

export const Hr = styled.hr`
	width: 100%;
	height: 2px;
	margin: 0 0 1.4rem;
	border: 0;
	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 0 1.4rem;
	color: #e4e6e7;
	font-size: 1.9rem;
	line-height: 3rem;
	text-align: left;
	max-height: 18rem;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;

	@media ${(props) => props.theme.breakpoints.sm} {
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

export const TagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
	list-style: none;
	padding: 0 0 1.2rem;
	min-height: 7.2rem;
	max-height: 7.2rem;
	overflow: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		min-height: auto;
		max-height: none;
		overflow: visible;
	}
`;

export const Tag = styled.span`
	border-radius: 999px;
	color: rgba(255, 255, 255, 0.8);
	display: inline-block;
	background: rgba(255, 255, 255, 0.08);
	line-height: 24px;
	padding: 0.2rem 1rem;
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

export const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(6, 9, 18, 0.78);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	z-index: 1000;
`;

export const ModalCard = styled.div`
	width: min(820px, 100%);
	max-height: 92vh;
	overflow-y: auto;
	background: linear-gradient(
		180deg,
		rgba(33, 45, 69, 0.94) 0%,
		rgba(26, 36, 56, 0.98) 100%
	);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 18px;
	padding: 1.8rem;
	position: relative;
`;

export const ModalClose = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 999px;
	border: 1px solid rgba(255, 255, 255, 0.55);
	background: rgba(15, 24, 42, 0.96);
	color: rgba(255, 255, 255, 0.98);
	font-size: 2rem;
	line-height: 1;
	cursor: pointer;
	z-index: 5;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);

	&:hover {
		background: rgba(30, 45, 74, 0.98);
		border-color: rgba(255, 255, 255, 0.8);
	}
`;

export const ModalImage = styled.img`
	width: 100%;
	height: 320px;
	object-fit: contain;
	object-position: center;
	background: rgba(12, 18, 34, 0.92);
	border-radius: 12px;
	margin-bottom: 1.2rem;
	animation: ${slideIn} 0.42s ease;

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 230px;
	}
`;

export const ModalImageNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin: -0.4rem 0 1.2rem;
`;

export const ModalImageNavButton = styled.button`
	border: 1px solid rgba(255, 255, 255, 0.35);
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.94);
	border-radius: 999px;
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background: rgba(255, 255, 255, 0.14);
	}
`;

export const ModalImageCounter = styled.span`
	font-size: 1.25rem;
	letter-spacing: 0.3px;
	color: rgba(255, 255, 255, 0.7);
`;

export const ModalTitle = styled.h3`
	font-size: 3.1rem;
	line-height: 1.2;
	font-weight: 700;
	color: #9cc9e3;
	margin: 0 0 0.8rem;
`;

export const ModalDescription = styled.p`
	color: #e4e6e7;
	font-size: 1.9rem;
	line-height: 3rem;
	margin: 0 0 1.2rem;
`;

export const ModalTags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
	list-style: none;
	padding: 0 0 1.2rem;
	margin: 0;
`;
