import Head from 'next/head';

export default function Test() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div>
        Hello
        <i className="fa-solid fa-phone"></i>
        <button className="button">Test</button>
        <button className="button button-small">Test small</button>
      </div>
    </div>
  );
}