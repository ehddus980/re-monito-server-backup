import {
    BackDiv,
    Mtitle,
    Mdate,
    Mtime,
    Mchart,
    Msolution,
  } from "../../Presenter/UserMeasurement/UserMeasurementContextPresenter";

const UserMeasurementContext = () => {
    return (
        <>
            <BackDiv>
                <Mtitle>스터디 1</Mtitle>
                <Mdate>2022.01.30(일)</Mdate>
                <Mtime>학습시간 : 2:30:41</Mtime>
                <Mchart>표(차트)</Mchart>
                <Msolution>솔루션</Msolution>
            </BackDiv>
        </>
    );
};

export default UserMeasurementContext;