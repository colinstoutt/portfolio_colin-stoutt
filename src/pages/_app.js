import "../scss/App.scss";
import "../scss/Navbar.scss";
import "../scss/index.scss";
import "../scss/about.scss";
import "../scss/projects.scss";
import "../scss/contact.scss";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
