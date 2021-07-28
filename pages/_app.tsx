import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 1000px;
  margin:0 auto;
  padding: 0;
}

body{
  min-height:100vh;
  padding:0 1rem;
  margin:0;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

main {
  margin-left: 270px;
  padding-left: 1rem;
  height: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: #295bff;
}
a:hover {
    color: #2752df;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
