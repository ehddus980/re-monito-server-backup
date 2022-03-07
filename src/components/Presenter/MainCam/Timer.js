import React from "react";
import styled, { css } from 'styled-components';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';

const Timers = styled.div`
    margin: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    right: 10%;
    top: -5%;
`; 

const TimeDisplay = styled.div`
    margin-bottom: 20px;
    font-size: 2.4vh;
    color: white;
`;

const BtnPlay = styled.button`
    border: none;
    background: none;
    margin-bottom: 10px;
    font-size: 2vh;
    color: white;
    &:hover {
      color: #d1963e;
    }
`;

const BtnPause = styled.button`
    border: none;
    background: none;
    margin-bottom: 10px;
    font-size: 2vh;
    color: white;
    &:hover {
      color: #d1963e;
    }
`;

const BtnReset = styled.button`
    border: none;
    background: none;
    margin-bottom: 10px;
    font-size: 2vh;
    color: white;
    margin-left: -5px;     

    &:hover {
      color: #d1963e;
    }
`;

function ListTimer() {
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

  return (
    <Timers>
        <TimeDisplay>
            <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          
        </TimeDisplay>
        {!timerOn && time === 0 && (
          <BtnPlay onClick={() => setTimerOn(true)}><FaPlay></FaPlay></BtnPlay>
        )}
        {timerOn && <BtnPause onClick={() => setTimerOn(false)}><FaPause></FaPause></BtnPause>}
        {!timerOn && time > 0 && (
          <BtnPlay onClick={() => setTimerOn(true)}><FaPlay></FaPlay></BtnPlay>
        )}
        {time >= 0 && (
          <BtnReset onClick={() => setTime(0)}><FaStop /></BtnReset>
        )}

    </Timers>
  )
};

export default React.memo(ListTimer);