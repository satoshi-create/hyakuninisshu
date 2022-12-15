import Layout from "../components/Layout";
import "../styles/globals.css";
import { ContedtProvider } from "../libs/context";

function MyApp({ Component, pageProps }) {
  return (
    <ContedtProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContedtProvider>
  );
}

export default MyApp;
