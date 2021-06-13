import Theme from "../styles/theme";
import "../components/Projects/styles.css";
import "../components/Footer/styles.css";
import Head from "next/head";
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
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
