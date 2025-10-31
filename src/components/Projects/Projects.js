import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
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
  <Section nopadding id="projects">
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} alt="Project Thumbnail" />
            <TitleContent>
              <HeaderThree titles>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>STACKS</TitleContent>
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
                <a className="button" id="button" href={visit} target="_blank" rel="noopener noreferrer">
                  <div id="circle"></div>
                  <span>Visit</span>
                </a>
              ) : null}
              <a className="button" id="button" href={source} target="_blank" rel="noopener noreferrer">
                <div id="circle"></div>
                <span>Source</span>
              </a>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
