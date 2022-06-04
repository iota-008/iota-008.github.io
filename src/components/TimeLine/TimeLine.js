import React, { useState, useRef, useEffect } from "react";

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	//* snap back to beginning of scroll when window is resized
	//* avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				I am a final year undergrad pursing BTech in Computer science and
				engineering from Indian Institute of Information Technology, Nagpur.
				<br />
				<br />
				Previously I have worked as an SDE intern for 6 months at Siemens
				Healthineers, where I worked in technologies like AWS Lex, AWS Lambda,
				and AWS S3. <br />
				<br />
				Before that I worked as a Fullstack developer Intern at a startup
				Labcolabs for 2 months, where I worked with technologies like React.js,
				Node.js, passport.js, OAuth and MongoDB.
				<br />
				<br />
				I have been working with C++, Python, Javascript, Git, React.js,
				Node.js, and MongoDB and have very good knowledge of Data structure &
				algorithms, OOP, DBMS, CN, and OS. Also, I have been solving DS Algo
				problems on leetcode consistently.
				<br />
				<br />
				I am always interested in learning new technologies and solving
				real-world problems using them.
				<br />
				<br />
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, i) => (
						<CarouselMobileScrollNode
							key={i}
							final={i === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={i}
								id={`carousel__item-${i}`}
								active={activeItem}
								onClick={(e) => handleClick(e, i)}
							>
								<CarouselItemTitle>
									{item.year}
									<br />
									<br />
									{item.month}
									<CarouselItemImg
										width='208'
										height='6'
										viewBox='0 0 208 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
											fill='url(#paint0_linear)'
											fillOpacity='0.33'
										/>
										<defs>
											<linearGradient
												id='paint0_linear'
												x1='-4.30412e-10'
												y1='0.5'
												x2='208'
												y2='0.500295'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='white' />
												<stop
													offset='0.79478'
													stopColor='white'
													stopOpacity='0'
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						name='timeline navigation button'
						key={index}
						index={index}
						active={activeItem}
						onClick={(e) => handleClick(e, index)}
						type='button'
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	);
};

export default Timeline;
