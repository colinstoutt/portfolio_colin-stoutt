import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Colin Stoutt | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* components */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
