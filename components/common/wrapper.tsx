import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  min-height: 100vh;
  height: 100%;
  margin: auto;

  div:first-child {
    align-self: center;
  }

  h1 {
    width: 100%;
  }
`;

export default Wrapper;
