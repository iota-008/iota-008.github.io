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
          My name is Ankit Raibole.
          <br /> I am final year undergrad pursuing BTech in computer science
          and engineering from Indian Institute of Information Technology,
          Nagpur. I love learning new technologies and using it to solve real
          world problems.
        </SectionText>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
