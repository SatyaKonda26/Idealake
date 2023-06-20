import Header from "../components/header/Header";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/carousel.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
