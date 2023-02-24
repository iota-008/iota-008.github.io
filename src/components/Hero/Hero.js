import React from "react";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<div>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle>Ankit's journey through software engineering</SectionTitle>
				<SectionText>
					A driven and passionate software developer with 6+ months of fulltime experience in creating and deploying high-quality applications.
					Proficient in Javascript, C#, C++, .Net core, React, Angular, Node, AWS and Azure.
					My goal is to continue growing as a software engineer and make a meaningful impact in the tech industry.
				</SectionText>
			</LeftSection>
		</Section>
	</div>
);

export default Hero;
