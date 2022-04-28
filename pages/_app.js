import "../styles/globals.css";
import "../styles/form.css";
import "../styles/atom-one-dark-reasonable.css";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
