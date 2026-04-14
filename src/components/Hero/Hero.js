import React from "react";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { CTAGroup, CTALink, LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<div>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle>Software Engineer building reliable cloud products</SectionTitle>
				<SectionText>
					Software Engineer 2 at JumpCloud with 4+ years of experience delivering secure,
					scalable SaaS systems across identity, integrations, and cloud platforms.
					I specialize in backend-heavy full-stack development with Go, Node.js, React,
					AWS, Azure, Kubernetes, and distributed systems design.
					I am open to international remote opportunities where I can drive measurable
					product and business impact.
				</SectionText>
				<CTAGroup>
					<CTALink
						href='https://drive.google.com/file/d/1yaslZaEJ1EcaDsAIHt-81aZVQ2IowBE7/view?usp=sharing'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Resume
					</CTALink>
					<CTALink $secondary href='mailto:raiboleankit8@gmail.com'>
						Contact Me
					</CTALink>
				</CTAGroup>
			</LeftSection>
		</Section>
	</div>
);

export default Hero;
