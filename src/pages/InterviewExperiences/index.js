import React from "react";
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	HeaderFour,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "../../components/Projects/ProjectsStyles.js";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { InterviewExperience } from "../../constants/constants";

function InterviewExperiences() {
	return (
		<Section id='interviewExperiences'>
			<SectionTitle>Interview Experiences</SectionTitle>

			<GridContainer>
				{InterviewExperience.map(
					({ id, name, image, title, description, location, date, result }) => (
						<BlogCard key={id}>
							<Img src={image} alt='Company Logo' />
							<TitleContent>
								<HeaderThree titles>{name}</HeaderThree>
								<HeaderFour titles>{title}</HeaderFour>
								<Hr />
							</TitleContent>
						</BlogCard>
					)
				)}
			</GridContainer>
		</Section>
	);
}

export default InterviewExperiences;
