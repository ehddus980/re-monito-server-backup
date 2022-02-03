import {EditTitle, BackDiv, UserPageEditBtn, UserPageEditBtnGroup} from "../../Presenter/UserPageEdit/UserPageEditPresenter";
import UserPageEditBox from "./UserPageEditBox";
import {Button} from "@chakra-ui/react";
import { Link } from "react-router-dom"; 

const UserPageEdit = () => {
    return (
        <>
            <BackDiv>
                <EditTitle>개인 정보 수정</EditTitle>
                <UserPageEditBox/>
                <UserPageEditBtnGroup>
                    <UserPageEditBtn><Link to ="/UserPageMain"><Button>저장</Button></Link></UserPageEditBtn>
                    <UserPageEditBtn><Link to ="/UserPageMain"><Button>취소</Button></Link></UserPageEditBtn>
                </UserPageEditBtnGroup>
                
            </BackDiv>
        </>
    );
};

export default UserPageEdit;