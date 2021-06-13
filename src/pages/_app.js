import Theme from "../styles/theme";
import "../components/Projects/styles.css";
import "../components/Footer/styles.css";
import Head from "next/head";
export default function App({ Component, pageProps, photo }) {
  console.log(photo);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Portfolio" />
        <meta
          name="keywords"
          content="Portfolio, Programmer, Student, Fullstack Developer"
        />
        <meta name="author" content="Ankit Raibole" />
        <meta property="og:image" content={photo?.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Ankit Raibole - Portfolio</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export const getServerSideProps = async () => {
  let photo = null;
  await fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((response) => response.json())
    .then((json) => {
      photo = json;
    });

  return {
    props: {
      photo,
    },
  };
};
