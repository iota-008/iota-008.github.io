import React from "react";
import {
	ActionButton,
  BlogCard,
	CardBody,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
	StackTitle,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit, playstore }) => (
          <BlogCard key={id}>
            <Img src={image} alt="Project Thumbnail" />
            <CardBody>
              <TitleContent>
                <HeaderThree titles>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <StackTitle>Stacks</StackTitle>
                <TagList>
                  {tags.map((tag, i) => (
                    <li key={i}>
                      <Tag href="#!">{tag}</Tag>
                    </li>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {visit !== "" ? (
                <ActionButton href={visit} target="_blank" rel="noopener noreferrer">
                  Visit
                </ActionButton>
                ) : null}
                {playstore ? (
                <ActionButton href={playstore} target="_blank" rel="noopener noreferrer">
                  Play Store
                </ActionButton>
                ) : null}
                {source ? (
                <ActionButton href={source} target="_blank" rel="noopener noreferrer">
                Source
                </ActionButton>
                ) : null}
              </UtilityList>
            </CardBody>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
