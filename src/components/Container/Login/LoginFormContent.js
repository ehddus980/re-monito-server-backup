import { Input, Button, Checkbox } from "@chakra-ui/react";
import {
  LoginInput,
  LoginLine,
  SideLine,
} from "../../Presenter/LoginFormPresenter";

const LoginFormContent = () => {
  return (
    <>
      <LoginInput>
        <Input variant="filled" placeholder="ID" />
        <br />
        <Input variant="filled" placeholder="Password" />
        <br />
        <Button colorScheme="blue" width="300px">
          로그인
        </Button>
        <br />
        <div>
          <Checkbox /> 로그인 상태 유지
        </div>
        <br />
        <div display="flex">
          <SideLine />
          <LoginLine>또는 다음으로 로그인</LoginLine>
        </div>
      </LoginInput>
    </>
  );
};

export default LoginFormContent;
