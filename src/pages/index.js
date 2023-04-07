import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Colin Stoutt | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="index">
        <h1 className="index__name fade-in-image">colinStoutt</h1>
        <h1 className="index__title fade-in-image">softwareDeveloper</h1>
      </main>
    </>
  );
}
