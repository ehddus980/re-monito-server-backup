import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Card, Catbtn, SearchBar } from "../../Presenter/StudyGroup/GroupFilter/Card";
import axiosHook from "../../Presenter/StudyGroup/axiosHook";
// import items from "./post.json";

import "../../Presenter/StudyGroup/GroupFilter/StudyMain.css";
import "../../Presenter/StudyGroup/GroupFilter/card.css";

import LogoSrc from '../../Presenter/StudyGroup/GroupFilter/book.jpg'
import useAxios from "../../Presenter/StudyGroup/axiosHook";
import axios from "axios";


const Logo = styled.img`
  width: 100%;
  max-height: 35vh;
  margin: 0px;
  opacity: 0.8;
  filter: brightness(120%);
  margin-bottom: 5vh;

  overflow: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    width: 0 !important;
  }
`;

const CreateRoom = styled.button`
  width:120px;
	height: 40px;
	color: white;
	background: #FFBE47;
	font-size: 16px;
	border:none;
	border-radius: 20px;
	box-shadow: 0 4px 16px rgba(0,79,255,0.3);
	transition:0.3s;
	position: relative;
	left:90%;
	
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



export default function Display() {
  const {data, setData} = useAxios('http://localhost:3001/rooms');
  const [filteredData,setFilterdData]=useState([]);

  const [activeCat, setActiveCat] = useState("전체");
  const [filterVga, setFilterVga] = useState([]);

  const [search, setSearch] = useState("");

  const handleDeleteRoome = (id)=>{
    setData(prev=>prev.filter(room=>room.id !== id));
  }
  

  // const updateData = async ()=>{
  //   const newData =(await axios.get('http://localhost:3001/rooms')).data;
  //   setData(newData);
  // } 
  // 새로고침 버튼
  
  useEffect(()=>{
    setFilterdData(data);
  },[data])

  
  useEffect(() => {
    if(activeCat === '전체'){
      setFilterdData(data);
    }else{
      setFilterdData([...data].filter(item=> item.recruit === activeCat))
    }
  },[activeCat])

  console.log(data)

  useEffect( async () => {
    setFilterVga(
      await filteredData.filter((room) =>
        room.roomname.includes(search)
      )
    );
  }, [search, filteredData]);

    return (
      <main>
        <Logo src={LogoSrc}></Logo>
  
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
  
        <section>
          <article className="categories">
            <Catbtn
              name="전체"
              catActive={activeCat === "전체" ? true : false}
              handleSetCat={setActiveCat}
            />
            <Catbtn
              name="모집중"
              catActive={activeCat === "모집중" ? true : false}
              handleSetCat={setActiveCat}
            />
            <Catbtn
              name="모집완료"
              catActive={activeCat === "모집완료" ? true : false}
              handleSetCat={setActiveCat}
            />
          </article>
          <CreateRoom>
            <Link to="/RoomCreate" className="button-design">스터디룸 생성</Link>
          </CreateRoom>
          
            {/* <button onClick={updateData}>refresh</button> */}
           <article className="card_list">            
          {filterVga && filterVga.map((r, i) => (
              <div className="card_container" key={i}>
                <Card card={r} handleDeleteRoome={()=>handleDeleteRoome(r.id)}> 
                </Card>
              </div>
            ))}
            {/* {renderList.length > 0 ? (
            renderList
          ) : (
            <p>찾으시는 스터디룸이 존재하지 않습니다.</p>
          )} */}
          </article>
        </section>
        <footer></footer>
      </main>
    );
}

