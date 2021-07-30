import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(75, 85, 99, 0.1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 1.5rem;
  background-color: #fcfcfc;
  cursor: pointer;
  border-radius: 4px;

  p {
    color: #858585;
    font-weight: 300;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid rgba(255, 54, 54, 0.5);
  }
`;

export default Box;
