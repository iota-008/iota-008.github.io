import React, { useEffect, useState } from "react";
import {
	ActionButton,
  BlogCard,
  CardBody,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  ModalCard,
  ModalClose,
  ModalDescription,
  ModalImage,
  ModalImageCounter,
  ModalImageNav,
  ModalImageNavButton,
  ModalOverlay,
  ModalTags,
  ModalTitle,
	ProjectUpdated,
	ProjectGroupCopy,
	ProjectGroupTitle,
  StackTitle,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { projectImageManifest } from "../../constants/projectImageManifest";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const getGitHubRepoFromUrl = (url = "") => {
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) {
    return null;
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/i, ""),
  };
};

const formatUpdatedDate = (dateInput) => {
  if (!dateInput) {
    return null;
  }

  const dateValue = new Date(dateInput);
  if (Number.isNaN(dateValue.getTime())) {
    return null;
  }

  return dateValue.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getProjectFolderFromImagePath = (imagePath = "") => {
  const parts = imagePath.split("/").filter(Boolean);
  const folderIndex = parts.indexOf("project-thumbnail");

  if (folderIndex === -1 || parts.length <= folderIndex + 1) {
    return "";
  }

  return parts[folderIndex + 1];
};

const getProjectImages = (project) => {
  const folder = getProjectFolderFromImagePath(project.image);
  const manifestImages = folder ? projectImageManifest[folder] : null;

  if (Array.isArray(manifestImages) && manifestImages.length > 0) {
    return manifestImages;
  }

  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images;
  }

  return project.image ? [project.image] : [];
};

const renderActions = ({ visit, playstore, source }, stopPropagation = false) => (
  <UtilityList>
    {visit ? (
      <ActionButton
        href={visit}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation ? (event) => event.stopPropagation() : undefined}
      >
        Visit
      </ActionButton>
    ) : null}
    {playstore ? (
      <ActionButton
        href={playstore}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation ? (event) => event.stopPropagation() : undefined}
      >
        Play Store
      </ActionButton>
    ) : null}
    {source ? (
      <ActionButton
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation ? (event) => event.stopPropagation() : undefined}
      >
        Source
      </ActionButton>
    ) : null}
  </UtilityList>
);

const renderProjectCards = (items, onOpen, slideTick, updatedMap) =>
  items.map((project) => (
    (() => {
      const images = getProjectImages(project);
      const activeImage = images.length
        ? images[(slideTick + project.id) % images.length]
        : project.image;
      const updatedLabel = updatedMap[project.id];

      return (
    <BlogCard
      key={project.id}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Img key={`${project.id}-${activeImage}`} src={activeImage} alt={`${project.title} thumbnail`} />
      <CardBody>
        <TitleContent>
          <HeaderThree titles>{project.title}</HeaderThree>
          {updatedLabel ? <ProjectUpdated>Updated {updatedLabel}</ProjectUpdated> : null}
          <Hr />
        </TitleContent>
        <CardInfo>{project.description}</CardInfo>
        <div>
          <StackTitle>Stacks</StackTitle>
          <TagList>
            {project.tags.map((tag) => (
              <li key={`${project.id}-${tag}`}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </TagList>
        </div>
        {renderActions(project, true)}
      </CardBody>
    </BlogCard>
      );
    })()
  ));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideTick, setSlideTick] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [projectUpdatedMap, setProjectUpdatedMap] = useState({});

  useEffect(() => {
    let isMounted = true;

    const fetchUpdatedDates = async () => {
      const githubProjects = projects.filter((project) => getGitHubRepoFromUrl(project.source));
      const requests = githubProjects.map(async (project) => {
        const repoDetails = getGitHubRepoFromUrl(project.source);
        if (!repoDetails) {
          return null;
        }

        try {
          const response = await fetch(
            `https://api.github.com/repos/${repoDetails.owner}/${repoDetails.repo}`,
            {
              headers: {
                Accept: "application/vnd.github+json",
              },
            }
          );

          if (!response.ok) {
            return null;
          }

          const data = await response.json();
          const formattedDate = formatUpdatedDate(data.pushed_at);
          if (!formattedDate) {
            return null;
          }

          return [project.id, formattedDate];
        } catch (error) {
          return null;
        }
      });

      const results = await Promise.all(requests);
      const nextMap = results
        .filter(Boolean)
        .reduce((accumulator, [projectId, updatedDate]) => {
          accumulator[projectId] = updatedDate;
          return accumulator;
        }, {});

      if (isMounted) {
        setProjectUpdatedMap(nextMap);
      }
    };

    fetchUpdatedDates();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideTick((prev) => prev + 1);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setModalImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <Section id="projects">
        <SectionDivider divider />
        <SectionTitle>Projects</SectionTitle>
        <SectionText>
          A mix of production-facing backend work, shipped products, and selected learning projects that show breadth across systems, APIs, and product delivery.
        </SectionText>

        <ProjectGroupTitle>Featured Work</ProjectGroupTitle>
        <ProjectGroupCopy>
          Most relevant projects for backend, platform, and product engineering roles.
        </ProjectGroupCopy>
        <GridContainer>
          {renderProjectCards(featuredProjects, setSelectedProject, slideTick, projectUpdatedMap)}
        </GridContainer>

        <ProjectGroupTitle $spaced>Other Projects</ProjectGroupTitle>
        <ProjectGroupCopy>
          Earlier projects and learning work that show experimentation across full-stack, real-time systems, and machine learning.
        </ProjectGroupCopy>
        <GridContainer>
          {renderProjectCards(otherProjects, setSelectedProject, slideTick, projectUpdatedMap)}
        </GridContainer>
      </Section>

      {selectedProject ? (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalClose onClick={() => setSelectedProject(null)} type="button">
              ×
            </ModalClose>
            <ModalImage
              key={`${selectedProject.id}-${modalImageIndex}`}
              src={getProjectImages(selectedProject)[modalImageIndex] || selectedProject.image}
              alt={`${selectedProject.title} thumbnail`}
            />
            {getProjectImages(selectedProject).length > 1 ? (
              <ModalImageNav>
                <ModalImageNavButton
                  type="button"
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      prev === 0 ? getProjectImages(selectedProject).length - 1 : prev - 1
                    )
                  }
                >
                  Prev
                </ModalImageNavButton>
                <ModalImageCounter>
                  {modalImageIndex + 1} / {getProjectImages(selectedProject).length}
                </ModalImageCounter>
                <ModalImageNavButton
                  type="button"
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      prev === getProjectImages(selectedProject).length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  Next
                </ModalImageNavButton>
              </ModalImageNav>
            ) : null}
            <ModalTitle>{selectedProject.title}</ModalTitle>
            {projectUpdatedMap[selectedProject.id] ? (
              <ProjectUpdated>Updated {projectUpdatedMap[selectedProject.id]}</ProjectUpdated>
            ) : null}
            <ModalDescription>{selectedProject.description}</ModalDescription>
            <StackTitle>Stacks</StackTitle>
            <ModalTags>
              {selectedProject.tags.map((tag) => (
                <li key={`${selectedProject.id}-modal-${tag}`}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ModalTags>
            {renderActions(selectedProject)}
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </>
  );
};

export default Projects;
