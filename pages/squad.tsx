import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import axios from "axios";
import Container from "../components/common/container";

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://flamengo-api.vercel.app/api/squad`);
    const squadData = res.data;

    return {
      props: {
        squad: squadData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Squad = ({ squad }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const json = squad;

  return (
    <Container>
      <Head>
        <title>Flamengo API</title>
        <meta name="description" content="Flamengo football team info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Squad Information</h1>
      <code>GET https://flamengo-api.vercel.app/api/squad</code>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Data</h2>
      <div>
        <ul>
          <li>All professional football squad</li>
        </ul>
      </div>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Example Response</h2>
      <pre>{JSON.stringify(json, undefined, 2)}</pre>
    </Container>
  );
};

export default Squad;
