import React from "react";
import { ExperienceData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CompanyBlock,
  CompanyName,
  ExperienceCard,
  ExperienceGrid,
  ExperienceHeader,
  Highlight,
  Highlights,
  MetaText,
  RoleText,
  StackList,
  StackPill,
} from "./ExperienceStyles";

const Experience = () => (
  <Section id="experience">
    <SectionDivider divider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      A snapshot of the roles where I’ve built production systems, improved reliability,
      and shipped measurable engineering impact.
    </SectionText>
    <ExperienceGrid>
      {ExperienceData.map(({ company, role, period, location, highlights, stack }) => (
        <ExperienceCard key={`${company}-${role}`}>
          <ExperienceHeader>
            <CompanyBlock>
              <CompanyName>{company}</CompanyName>
              <RoleText>{role}</RoleText>
            </CompanyBlock>
            <MetaText>
              {period}
              <br />
              {location}
            </MetaText>
          </ExperienceHeader>
          <Highlights>
            {highlights.map((item) => (
              <Highlight key={item}>{item}</Highlight>
            ))}
          </Highlights>
          <StackList>
            {stack.map((item) => (
              <StackPill key={item}>{item}</StackPill>
            ))}
          </StackList>
        </ExperienceCard>
      ))}
    </ExperienceGrid>
  </Section>
);

export default Experience;
