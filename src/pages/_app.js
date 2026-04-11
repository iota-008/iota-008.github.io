import Theme from "../styles/theme";
import Head from "next/head";
import { StyleSheetManager } from "styled-components";

const filterProps = new Set([
  "grid",
  "row",
  "nopadding",
  "divider",
  "titles",
  "final",
  "index",
  "active",
  "main",
  "colorAlt",
  "alt",
  "form",
  "disabled",
  "nav",
  "large",
  "isOpen",
  "ariaLabel",
]);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio" />
        <meta
          name="keywords"
          content="Portfolio, Programmer, Student, Fullstack Developer"
        />
        <meta name="author" content="Ankit Raibole" />
        <meta property="og:image" content="/images/Portfolio-Thumbnail.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Ankit Raibole - Portfolio</title>
      </Head>
      <StyleSheetManager shouldForwardProp={(prop) => !filterProps.has(prop)}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </StyleSheetManager>
    </>
  );
}
