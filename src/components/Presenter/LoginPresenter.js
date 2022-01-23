import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right top, #1e2230, #0e0e0e);
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 400px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 100px black;
`;

const LoginBoxTitle = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
`;

export { BackDiv, LoginBox, LoginBoxTitle };
