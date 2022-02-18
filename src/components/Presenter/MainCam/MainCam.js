import React from "react";
import styled from "styled-components";
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import TodoCreate from './TodoCreate';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import { TodoHead } from './TodoList';


const Div = styled.div`
  margin: 0px;
`;

const CamStates = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  padding-top: 20px;
  width: 100%;
  height: 10vh;
  margin: 0px;
  margin-bottom: 5%;
  box-shadow: 0px 10px 10px 0px #bfb9b4;
  margin-top: 5vh;
  padding-bottom: 2vh;
`;

const Block = styled.div`
  margin: 5px;
  left: 5%;
  
  position: relative;
  border-radius: 20px;
  width: 190vh;
  height: 80vh;
  
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Btn1 = styled.button`
  width: 10vh;
  height: 10vh;
  border: 5px solid #d1963e;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 40%;
  font-size: 40px;
  background-color: white;
  background-size: contain;
  padding-top: 2%;

  color: #d1963e;
  
  top: 91%;

  &:hover {
    color: #D1A66F;
    border: 5px solid #D1A66F;
  }
`;

const BtnReset = styled.button`
  color: #60EB4A;
  font-size: 3vh;
  font-weight: bold;
  position: relative;
  top: 105%;
  border: 0;
  left: 23%;
  background-color: white;
  &:hover {
    color: #80EB71;
  }
`;

const State1 = styled.div`
  background-color: #E9A681;
  width: 12vh;
  height: 6vh;
  position relative;
  top: 95%;
  left: 10%;
  font-size: 2.6vh;
  vertical-align: center;
  text-align: center;
  border-radius: 1vh;
  color: white;
`;

const State2 = styled.div`
  background-color: #E9BE81;
  width: 12vh;
  height: 6vh;
  position relative;
  top: 85%;
  left: 68%;
  font-size: 2.6vh;
  vertical-align: center;
  text-align: center;
  border-radius: 1vh;
  color: white;
`;

const VideoBox = styled.div`
  line-height: 50px;
  font-size: 24px;
  font-weight: 600;
  margin: 10px;
  width: 60vh;
  height: 62vh;
  position: relative;
  left : 8%;
  top : 4%;
  background-color: black;
  
`;

const RightBlock = styled.div`
  line-height: 50px;
  font-size: 24px;
  font-weight: 600;
  margin: 10px;
  width: 82vh;
  position: relative;
  left: 12%;
  
`;

const TimeBlock = styled.div`
  text-align: center;
  line-height: 15vh;

  color: white;
  font-size: 4vh;
  font-weight: 600;
  
  margin: 10px;
  margin-left: 6vh;
  width: 70vh;
  height: 15vh;
  position: relative;
  top: 15px;
  border-radius: 20px;
  background: linear-gradient(80deg, #f1da94, #e9a681);

`;

const SubjectBlock = styled.div`
  padding-left: 2vh;
  text-align: left;
  line-height: 50px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 10px;
  width: 68vh;
  height: 15vh;
  position: relative;
  top: 20px;
  border-radius: 20px;
  background: linear-gradient(90deg, #ECBFBF, #FF9696);
  
`;

const BtnAdd =styled.button`
  width: 11vh;
  height: 4.5vh;
  border-radius: 5px;
  position: relative;
  top: 3vh;
  left: 75%;
  background-color: #e6b771;
  font-size: 16px;
  color: white;
  border: 0;
  font-weight: 600;

  &:hover {
    background-color: #d1963e;
  }
`;

function CamSide() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return(
    <>
      <VideoBox>
        {!timerOn && time === 0 && (
          <Btn1 onClick={() => setTimerOn(true)}><FaPlay></FaPlay></Btn1>
        )}
        {timerOn && <Btn1 onClick={() => setTimerOn(false)}><FaPause></FaPause></Btn1>}
        {!timerOn && time > 0 && (
          <Btn1 onClick={() => setTimerOn(true)}><FaPlay></FaPlay></Btn1>
        )}
        {!timerOn && time > 0 && (
          <BtnReset onClick={() => setTime(0)}>초기화</BtnReset>
        )}
        
        <State1>자세불량</State1>
        <State2>집중</State2>
      </VideoBox>
      
      <RightBlock>
      <TimeBlock>
      <div id="display">공부시간 :&nbsp; 
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span> 
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      
      </TimeBlock>
        
        <TodoProvider>
          <TodoList />
          <TodoCreate></TodoCreate>
        </TodoProvider>
        
      </RightBlock>
      
    </>
  )
}


export { Div, CamStates, Block, CamSide, SubjectBlock, BtnAdd };
