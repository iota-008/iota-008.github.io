import React from "react";
import { DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { SiCplusplus, SiJupyter } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TechIconWrap,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Core tools and platforms I use to build reliable products end-to-end.
    </SectionText>
    <List>
      <ListItem>
        <TechIconWrap>
          <DiReact size="2.6rem" />
        </TechIconWrap>
        <ListContainer>
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>React, Angular, TypeScript, Tailwind</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIconWrap>
          <DiNodejs size="2.6rem" />
        </TechIconWrap>
        <ListContainer>
        <ListTitle>Backend & APIs</ListTitle>
        <ListParagraph>Golang, Node.js, Express, gRPC, OAuth, SCIM, SSO</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIconWrap>
          <DiMongodb size="2.6rem" />
        </TechIconWrap>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
        <ListParagraph>DynamoDB, Cosmos DB, MongoDB, PostgreSQL, Snowflake</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIconWrap>
          <SiJupyter size="2.6rem" />
        </TechIconWrap>
        <ListContainer>
        <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
        AWS, Azure, Kubernetes, Terraform, ArgoCD, DataDog, Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TechIconWrap>
          <SiCplusplus size="2.4rem" />
        </TechIconWrap>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
        Golang, TypeScript, JavaScript, Python, C++, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
