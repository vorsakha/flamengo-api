import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(213, 62, 62, 0.3);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 1rem;
  background-color: #fcfcfc;
  cursor: pointer;
  border-radius: 4px;

  p {
    color: #858585;
    font-weight: 300;
  }

  h2 {
    font-size: 1.2rem;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default Box;
