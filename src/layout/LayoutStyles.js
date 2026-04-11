import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin: auto;
  position: relative;
`;

export const BackgroundLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.55;
`;

export const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;
