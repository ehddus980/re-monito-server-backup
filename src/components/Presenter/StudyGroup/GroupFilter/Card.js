import "./card.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import axios from "axios";
import useAxios from "../axiosHook";
import RoomUpdate from "../../../Container/StudyGroup/roomUpdate";


const DelBtn = styled.button`
  position: absolute;
  left: 76%;
  margin-top: 2.3%;
  vertical-align: middle;
  border: none;
  background: none;
  font-size: 40px;
  color: #ff6b6b;
  &:hover {
    color: #F69F9F;
  }
`; 

const UpdateBtn = styled.button`
  width: 65px;
  height: 40px;
  color: white;
  background: #FFBE47;
  font-size: 16px;
  border:none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0,79,255,0.3);
  transition:0.3s;
  position: relative;
  top: 15px;
  left: 20px;
  margin-left: 2%;

  transform: translate(-50%,-50%);
  .button-design{
    text-decoration-line: none;
    &:visited{
      color:white;
    }
  }
  &:focus {
    outline: 0;
  }
  &:hover{
    background: #DB9A33;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,79,255,0.6);
  }

`;

export function Card({ card, handleDeleteRoome }) {
  
  console.log(card);

  function useDel() {
    if(window.confirm('스터디룸을 삭제 하시겠습니까?')) {
        axios.delete(`http://localhost:3001/rooms/${card.id}`)
        handleDeleteRoome();
    }
  }

  const { id, roomname, recruit, member, score } = card;

  // const [, setCardData] = useState("");

  // const handleUpdateRoom = (id) => {
  //   setCardData(prev=>prev.filter(card=>card.id === id));
  // }

  // console.log(card);
  return (
    <>
      <div className="card_header">{roomname}
      <UpdateBtn>
        <Link to='/StudyGroup/RoomUpdate' className="button-design" state={{
          id: id,
          roomname: roomname,
          recruit: recruit,
          member: member,
          score: score,
        }}>수정</Link>
      </UpdateBtn> 
      </div>
      <div className="recruit_num">{recruit}</div>
      <div className="card_info">
        <span>그룹 집중 점수: {score}</span>
        <div className="member_num">{member}/40</div>
      </div>
      <DelBtn onClick={useDel}><MdDelete /></DelBtn>
    </>
  );
}

export function Catbtn({ name, catActive, handleSetCat }) {
  return (
    <button
      className={`cat_btn hover ${catActive ? "active_btn" : null}`}
      onClick={() => handleSetCat(name)}
    >
      {name}
    </button>
  );
}

export function SearchBar({ onChange }) {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="스터디룸을 검색해 보세요"
        className="search_bar"
        name="searchText"
        onChange={onChange}
      />
    </form>
  );
}

