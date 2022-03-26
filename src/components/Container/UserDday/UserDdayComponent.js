import {
    BackDiv,
    DdayTitle,
}
from "../../Presenter/UserDday/UseDdayPresent";
import DdayMake from "./DdayMake";

const UserDday = () => {

    
    return (
        <>
            <BackDiv>
                <DdayTitle>디데이 설정</DdayTitle>
                <DdayMake/>
            </BackDiv>
        </>
    );
};

export default UserDday;