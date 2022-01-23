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
          <LoginBoxTitle>Login</LoginBoxTitle>
          <LoginFormContent />
        </LoginBox>
      </BackDiv>
    </>
  );
};

export default Login;
