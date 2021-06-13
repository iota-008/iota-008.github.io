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
                <div className="button" id="button">
                  <div id="circle"></div>
                  <a href={visit} target="_blank">
                    Visit
                  </a>
                </div>
              ) : null}
              <div className="button" id="button">
                <div id="circle"></div>
                <a href={source} target="_blank">
                  Source
                </a>
              </div>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
