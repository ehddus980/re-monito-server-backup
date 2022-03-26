import { BackDiv, Editname,EditText,Line, Linee } from "../../Presenter/UserPageEdit/UserPageEditBoxPresenter";


const UserPageEditBox = () => {
    return (
        <>
        <form>
        <BackDiv>
            <table>
              <Line>
                <tr>
                  <td><Editname>커버사진</Editname></td>
                  <td><EditText>사진사진</EditText></td> 
                </tr>
              </Line>

              <Line>
                <tr>
                  <td><Editname>이름(닉네임)</Editname></td>
                  <td><EditText>
                    <input placeholder="현재 이름(닉네임)"></input>
                  </EditText></td>
                </tr>
              </Line>

              <Line>
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
              </Line>
              
              <Linee>
                <tr>
                  <td><Editname>비밀번호 변경</Editname></td>
                  <td><EditText>
                    <input placeholder="현재 비밀번호"></input> <br/>
                    <input placeholder="새 비밀번호"></input> <br/>
                    <input placeholder="비밀번호 재확인"></input> 
                  </EditText></td>
                </tr>
              </Linee>
              
            </table>
          </BackDiv>
        </form>
        </>
    );
};

export default UserPageEditBox;