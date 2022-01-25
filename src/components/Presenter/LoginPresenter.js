import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 500px;
  border-radius: 50px;
  background-color: white;
`;

const LoginBoxTitle = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
`;

export { BackDiv, LoginBox, LoginBoxTitle };
