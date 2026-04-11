import React from "react";
import dynamic from "next/dynamic";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { BackgroundLayer, Container, ContentLayer } from "./LayoutStyles";

const BgAnimation = dynamic(
  () => import("../components/BackgroundAnimation/BackgroundAnimation"),
  { ssr: false }
);

export const Layout = ({ children }) => {
  return (
    <Container>
      <BackgroundLayer>
        <BgAnimation />
      </BackgroundLayer>
      <ContentLayer>
        <Header />
        <main>{children}</main>
        <Footer />
      </ContentLayer>
    </Container>
  );
};
