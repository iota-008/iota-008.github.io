import Theme from "../styles/theme";
import "../components/Projects/styles.css";
import "../components/Footer/styles.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
