import React, { useEffect } from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

import { AccomplishmentsData } from "../../constants/constants";

const Accomplishments = () => (
	<Section>
		<SectionTitle>Accomplishments</SectionTitle>
		<Boxes>
			{AccomplishmentsData.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}</BoxNum>
					<BoxText>{card.text}</BoxText>

					{card.link != undefined ? (
						<>
							<a href={card.link} target='_blank' style={{ color: "yellow" }}>
								certificate
							</a>
						</>
					) : (
						<></>
					)}
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Accomplishments;
