import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "../../Presenter/StudyGroup/Card";
import Catbtn from "../../Presenter/StudyGroup/Catbtn";
import SearchBar from "../../Presenter/StudyGroup/SearchBar";

import "../../Presenter/StudyGroup/StudyMain.css";

import items from "./post.json";

import LogoSrc from '../../Presenter/StudyGroup/book.jpg'

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

export default function Display() {

  const [activeCat, setActiveCat] = useState("전체");
  const [data, setData] = useState(items);

  const [search, setSearch] = useState("");
  const [filterVga, setFilterVga] = useState([]);

  useEffect(() => {
    activeCat === "전체"
      ? setData(items)
      : setData(items.filter((vga) => vga.recruit === activeCat));
  }, [activeCat]);

  useEffect(() => {
    setFilterVga(
      data.filter((room) =>
        room.roomname.includes(search)
      )
    );
  }, [search, data]);

  const renderList = filterVga.map((g, i) => {
    return (
      <div className="card_container">
        <Card card={g} key={i} />
      </div>
    );
  });

  console.log(search);
  return (
    <main>
      <Logo src={LogoSrc}></Logo>

      <SearchBar onChange={(e) => setSearch(e.target.value)} />

      <section>
        <article className="categories">
          {/* {activeCat.map((cate) => {
            return <button className="cat_btn hover">{cate}</button>;
          })} */}
          {/* {activeCat.map((cat) => {
            <Card name={cat} />;
          })} */}
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
        <article className="card_list">
          {renderList.length > 0 ? (
            renderList
          ) : (
            <p>찾으시는 스터디룸이 존재하지 않습니다.</p>
          )}
        </article>
      </section>
      <footer></footer>
    </main>
  );
}

