import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Colin Stoutt | Web Developer</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
