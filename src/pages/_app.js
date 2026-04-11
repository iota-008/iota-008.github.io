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
        <meta
          name="description"
          content="Ankit Raibole is a backend-focused software engineer at JumpCloud building reliable cloud products across identity, integrations, and distributed SaaS systems."
        />
        <meta
          name="keywords"
          content="Ankit Raibole, backend engineer, software engineer, JumpCloud, Golang, Node.js, React, AWS, Azure, portfolio"
        />
        <meta name="author" content="Ankit Raibole" />
        <meta name="theme-color" content="#0F1624" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ankit Raibole | Software Engineer" />
        <meta
          property="og:description"
          content="Backend-focused software engineer building reliable cloud products, integrations, and distributed systems."
        />
        <meta property="og:url" content="https://iota-008.github.io/" />
        <meta property="og:image" content="/images/Portfolio-Thumbnail.png" />
        <meta property="og:site_name" content="Ankit Raibole Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ankit Raibole | Software Engineer" />
        <meta
          name="twitter:description"
          content="Backend-focused software engineer building reliable cloud products, integrations, and distributed systems."
        />
        <meta name="twitter:image" content="/images/Portfolio-Thumbnail.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://iota-008.github.io/" />

        <title>Ankit Raibole | Software Engineer</title>
      </Head>
      <StyleSheetManager shouldForwardProp={(prop) => !filterProps.has(prop)}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </StyleSheetManager>
    </>
  );
}
