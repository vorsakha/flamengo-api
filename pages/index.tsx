import Head from "next/head";
import Link from "next/link";
import Box from "../components/common/box";
import Grid from "../components/common/grid";
import Wrapper from "../components/common/wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flamengo API</title>
        <meta name="description" content="Flamengo football team info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <div>
          <div>
            <h1>Flamengo API</h1>
            <p>Documentation for the unofficial, open source Flamengo API</p>
          </div>

          <Grid>
            <Link href="/squad">
              <a>
                <Box>
                  <h2>Squad</h2>
                  <p>Squad information</p>
                </Box>
              </a>
            </Link>
            <Link href="/staff">
              <a>
                <Box>
                  <h2>Staff</h2>
                  <p>Staff information</p>
                </Box>
              </a>
            </Link>
            <Link href="honours">
              <a>
                <Box>
                  <h2>Honours</h2>
                  <p>Trophies won by Flamengo professional football team</p>
                </Box>
              </a>
            </Link>
            <Link href="misc">
              <a>
                <Box>
                  <h2>Miscellaneous</h2>
                  <p>Other informations</p>
                </Box>
              </a>
            </Link>
          </Grid>
        </div>
      </Wrapper>
    </>
  );
}
