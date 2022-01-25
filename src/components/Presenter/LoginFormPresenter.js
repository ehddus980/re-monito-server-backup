import styled from "styled-components";

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const LoginLine = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  margin: 8px 0px;
`;
const SideLine = styled.div`
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
`;

export { LoginInput, LoginLine, SideLine };
