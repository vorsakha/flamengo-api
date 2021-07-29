import Head from "next/head";
import Container from "../components/common/container";
import axios from "axios";
import { InferGetStaticPropsType } from "next";

// export async function getStaticProps() {
//   try {
//     const res = await axios.get(`${process.env.VERCEL_URL}/api/misc`);
//     const miscData = res.data;

//     return {
//       props: {
//         misc: miscData,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

const Misc = () =>
  //{ misc }: InferGetStaticPropsType<typeof getStaticProps>
  {
    const json = "misc";

    return (
      <Container>
        <Head>
          <title>Flamengo API</title>
          <meta name="description" content="Flamengo football team info" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Miscellaneous</h1>
        <code>GET https://flamengo-api.vercel.app/api/misc</code>

        <h2 style={{ margin: "2rem 0 1rem 0" }}>Data</h2>
        <p>
          <ul>
            <li>Club membership numbers</li>
            {/* <li>Last match results</li> */}
            <li>Season scheduled games</li>
          </ul>
        </p>

        <h2 style={{ margin: "2rem 0 1rem 0" }}>Example Response</h2>
        <pre>{JSON.stringify(json, undefined, 2)}</pre>
      </Container>
    );
  };

export default Misc;
