import styled from "styled-components";

export const ExperienceGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 1.6rem;
`;

export const ExperienceCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2rem;
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    rgba(33, 45, 69, 0.42) 0%,
    rgba(26, 36, 56, 0.92) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 100%;
`;

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const CompanyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CompanyName = styled.h3`
  font-size: 2.6rem;
  line-height: 1.2;
  font-weight: 700;
  color: #ffffff;
`;

export const RoleText = styled.p`
  font-size: 1.7rem;
  line-height: 2.4rem;
  color: #9cc9e3;
  font-weight: 600;
`;

export const MetaText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.58);
  text-align: right;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: left;
  }
`;

export const Highlights = styled.ul`
  margin: 0;
  padding-left: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const Highlight = styled.li`
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.65rem;
  line-height: 2.7rem;
`;

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
`;

export const StackPill = styled.span`
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.35rem 1rem;
  font-size: 1.3rem;
  line-height: 1.8rem;
`;
