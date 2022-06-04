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
				<SectionTitle>Welcome to my portfolio built using Next.js</SectionTitle>
				<SectionText>
					Hi,
					<br />I am Ankit Raibole, a final year undergraduate pursuing Bachelor
					of Technology in Computer Science and Engineering from Indian
					Institute of Information Technology, Nagpur.
				</SectionText>
			</LeftSection>
		</Section>
	</div>
);

export default Hero;
