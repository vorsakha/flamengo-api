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

code {
  background-color: #fcfcfc;
  border: 1px solid rgba(75, 85, 99, 0.1); 
  border-radius: 4px;
  padding: 1rem;
}

pre {
  background-color: #fcfcfc;
  border: 1px solid rgba(75, 85, 99, 0.1); 
  border-radius: 4px;
  padding: 1rem;

  // Wrap text that don't respect width
  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;      /* Internet Explorer 5.5+ */
}

a {
  text-decoration: none;
  color: #ff2929;
  font-weight: bold;
}
a:hover {
    color: #d52424;
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
