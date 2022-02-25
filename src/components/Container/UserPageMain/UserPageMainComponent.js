import { Edit,
    Measurement,
    PoseHeart, 
    Dday, 
    MypageFlex, 
    BackDiv, 
    UserPageBox,
    UserPageTitle,
    UserBtn,
 } from "../../Presenter/UserPageMain/UserPageMainPresenter";
import UserPageMainBox from "./UserPageMainBox";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; 

const UserPageMain = () => {
    return (
        <>
        <BackDiv>
            <MypageFlex>
                    <Edit>
                        <UserPageTitle>개인 정보 수정</UserPageTitle>
                        <UserPageBox/>
                        <UserBtn><Link to ="/UserPageEdit" className="UserPageBtn">수정</Link></UserBtn>
                    </Edit>
                    <Measurement>
                        <UserPageTitle>측정 결과 분석</UserPageTitle>
                        <UserPageBox/>
                        <UserBtn><Link to ="/UserMeasurement" className="UserPageBtn">확인하기</Link></UserBtn>
                    </Measurement>
                </MypageFlex>
                <MypageFlex>
                    <PoseHeart>
                        <UserPageTitle>자세 및 심박수</UserPageTitle>
                        <UserPageBox/>
                        <UserBtn>설정</UserBtn>
                    </PoseHeart>
                    <Dday>
                        <UserPageTitle>디데이 설정</UserPageTitle>
                        <UserPageBox/>
                        <UserBtn>설정</UserBtn>
                    </Dday>
                </MypageFlex>
            </BackDiv>
        </>
    );
};

export default UserPageMain;