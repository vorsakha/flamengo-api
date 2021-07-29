import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import Container from "../components/common/container";
import axios from "axios";

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://flamengo-api.vercel.app/api/honours`);
    const honoursData = res.data;

    return {
      props: {
        honours: honoursData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Honours = ({
  honours,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const json = honours;

  return (
    <Container>
      <Head>
        <title>Flamengo API</title>
        <meta name="description" content="Flamengo football team info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Honours</h1>
      <code>GET https://flamengo-api.vercel.app/api/honours</code>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Data</h2>
      <div>
        <ul>
          <li>All club professional honours</li>
        </ul>
      </div>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Example Response</h2>
      <pre>{JSON.stringify(json, undefined, 2)}</pre>
    </Container>
  );
};

export default Honours;
