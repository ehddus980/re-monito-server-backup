import { Edit,
    Measurement,
    PoseHeart, 
    Dday, 
    MypageFlex, 
    BackDiv, 
    UserPageBox,
    UserPageTitle,
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
                        <Link to ="/UserPageEdit"><Button>수정</Button></Link>
                    </Edit>
                    <Measurement>
                        <UserPageTitle>측정 결과 분석</UserPageTitle>
                        <UserPageBox/>
                        <Link to ="/UserMeasurement"><Button>확인하기</Button></Link>
                    </Measurement>
                </MypageFlex>
                <MypageFlex>
                    <PoseHeart>
                        <UserPageTitle>자세 및 심박수</UserPageTitle>
                        <UserPageBox/>
                        <Button>설정</Button>
                    </PoseHeart>
                    <Dday>
                        <UserPageTitle>디데이 설정</UserPageTitle>
                        <UserPageBox/>
                        <Button>설정</Button>
                    </Dday>
                </MypageFlex>
            </BackDiv>
        </>
    );
};

export default UserPageMain;