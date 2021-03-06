import Head from "next/head";
import axios from "axios";
import Container from "../components/common/container";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://flamengo-api.vercel.app/api/staff`);
    const staffData = res.data;

    return {
      props: {
        staff: staffData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Staff = ({ staff }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const json = staff;

  return (
    <Container>
      <Head>
        <title>Flamengo API</title>
        <meta name="description" content="Flamengo football team info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Staff Information</h1>
      <code>GET https://flamengo-api.vercel.app/api/staff</code>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Data</h2>
      <div>
        <ul>
          <li>Professional football staff</li>
        </ul>
      </div>

      <h2 style={{ margin: "2rem 0 1rem 0" }}>Example Response</h2>
      <pre>{JSON.stringify(json, undefined, 2)}</pre>
    </Container>
  );
};

export default Staff;
