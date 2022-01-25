import {
  LoginBox,
  LoginBoxTitle,
  BackDiv,
} from "../../Presenter/LoginPresenter";
import LoginFormContent from "./LoginFormContent";

const Login = () => {
  return (
    <>
      <BackDiv>
        <LoginBox>
          <LoginBoxTitle>대충 로고</LoginBoxTitle>
          <LoginFormContent />
        </LoginBox>
      </BackDiv>
    </>
  );
};

export default Login;
