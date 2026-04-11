import Link from 'next/link';
import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2.4rem;
  align-items: center;
  width: min(100%, 1720px);
  max-width: 1720px;
  margin: 0 auto;
  padding: 1.4rem clamp(16px, 3vw, 56px);
  background: rgba(15, 22, 36, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1.2rem;
    padding: 1rem 1.2rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 2;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 3;
    justify-content: flex-start;
    gap: 1.6rem;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.8rem;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: flex-end;
    align-items: flex-end;
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const HeaderMeta = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.55);
  align-self: flex-end;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

// Navigation Links
export const NavLink = styled(Link)`
  font-size: 2.2rem;
  line-height: 30px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Hash Navigation Links (use browser default anchor behavior)
export const HashNavLink = styled.a`
  font-size: 1.6rem;
  line-height: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 6px;
&:hover {
    background-color: rgba(33, 45, 69, 0.8);
    transform: scale(1.12);
    cursor: pointer;
    
  }
`