import {
    Div, 
    CamStates, 
    Block, 
    CamSide,
  } from "../../Presenter/MainCam/MainCam.js";

  
  const MainCam = () => {
    return (
      <>
        <Div>
          <CamStates>학 습</CamStates>
          
          <Block>            
            <CamSide />
          </Block>
          <br></br>
          <br></br>
        </Div>
      </>
    );
  };
  
  export default MainCam;
  