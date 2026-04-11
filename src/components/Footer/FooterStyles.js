import styled from "styled-components";


export const ScrollToTopButton = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background: -webkit-gradient(linear, from(#13adc7), to(#945dd6));
  background: linear-gradient(360deg, #13adc7 0%, #945dd6 100%);
  -webkit-clip-path: circle();
          clip-path: circle();
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;

  &:hover{
    background: -webkit-gradient(linear, color-stop(5%, #f3cdff), to(#420092));
    background: linear-gradient(360deg, #f3cdff 5%, #420092 100%);
  }
`;
export const FooterWrapper = styled.section`
  width: min(100%, 1720px);
  max-width: 1720px;
  padding: 2.4rem clamp(16px, 3vw, 56px) 40px;
  margin: 1rem auto;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: 100%;
  }
`;

export const LinkItem = styled.a`
  font-size: 15px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Img = styled.img`
	width: 10%;
	object-fit: cover;
	overflow: hidden;
`;

export const Slogan = styled.div`
  color: rgba(255, 255, 255, 0.5);
  min-width: 320px;
  letter-spacing: 0.02em;
  font-size: 16px;
  line-height: 28px;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 20px;
    font-size: 13px;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, auto));
  gap: 24px;
  padding: 40px 0 28px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    padding: 24px 0 14px;
    gap: 12px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
