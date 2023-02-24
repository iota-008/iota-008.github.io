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
				As a Full-Stack Developer, I bring a unique combination of technical expertise and passion for software development to my work at Siemens Healthineers.
				I hold a Bachelor of Technology in Computer Science and Engineering from the Indian Institute of Information Technology Nagpur, which I completed in 2022.
				With a solid educational foundation and hands-on experience in the field, I am committed to delivering innovative solutions and driving positive impact in the tech industry.
				<br />
				<br />
				With a strong background in software development, I bring a wealth of experience to any project.
				I honed my skills as an SDE intern at Siemens Healthineers, where I spent 6 months working on AWS services like AWS Lex to develop an AI chatbot for the company website.
				Currently, I continue to work in the same team, leveraging my expertise to drive innovative solutions. Prior to this role, I served as a Full-Stack Developer Intern at a startup, Labcolabs, where I worked with technologies such as React.js, Node.js, passport.js, OAuth, and MongoDB.
				My ability to quickly learn and apply new technologies, combined with my passion for software development, makes me a valuable asset to any team.
				<br />
				<br />
				As a skilled software developer, I have hands-on experience with a variety of programming languages and technologies, including C++, Python, JavaScript, Git, React.js, Node.js, and MongoDB.
				I possess a deep understanding of Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Computer Networks (CN), and Operating Systems (OS).
				In addition, I consistently challenge myself by solving complex Data Structure and Algorithm problems on Leetcode, further honing my skills and knowledge.
				<br />
				<br />
				In addition to my technical skills and experience, I have a strong passion for web3 and trading.
				I am constantly expanding my knowledge in these areas, always seeking out new opportunities to learn and grow.
				My love for technology, combined with my drive to stay current with industry developments, makes me a well-rounded software developer who is always looking for ways to innovate and create impact.
				<br />
				<br />
				As a lifelong learner and technology enthusiast, I am driven by the desire to explore new technologies and find innovative solutions to real-world problems.
				My passion for staying on the cutting edge of technology, combined with my commitment to using my skills to make a positive impact, makes me a valuable asset to any team seeking to drive progress and create change.
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
