import { BackDiv, Editname,EditText } from "../../Presenter/UserPageEdit/UserPageEditBoxPresenter";


const UserPageEditBox = () => {
    return (
        <>
          <BackDiv>
            <table>
              <tr>
                <td><Editname>커버사진</Editname></td>
                <td><EditText>sdsdd</EditText></td>
              </tr>
              <tr>
                <td><Editname>닉네임</Editname></td>
                <td><EditText>sdsdd</EditText></td>
              </tr>
              <tr>
                <td><Editname>직업</Editname></td>
                <td>
                  <EditText>
                  <select name = "job">
                    <option value="">직업선택</option>
                    <option value="초등학생">초등학생</option>
                    <option value="중학생">중학생</option>
                    <option value="고등학생">고등학생</option>
                    <option value="대학생">대학생</option>
                    <option value="취업준비생">취업준비생</option>
                    <option value="직장인">직장인</option>
                  </select>
                  </EditText>
                </td>
              </tr>
              <tr>
                <td><Editname>비밀번호 변경</Editname></td>
                <td><EditText>sdsdd</EditText></td>
              </tr>
            </table>
          </BackDiv>
        </>
    );
};

export default UserPageEditBox;