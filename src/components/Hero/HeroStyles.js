import styled from 'styled-components';

export const LeftSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3.2rem;
  background: rgba(33, 45, 69, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  @media ${(props) => props.theme.breakpoints.sm} {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1.2rem;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.4rem 1.6rem;
    margin: 0 auto;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

export const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 1.8rem;
  border-radius: 999px;
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: ${(props) =>
    props.$secondary
      ? "transparent"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.6);
  }
`;
