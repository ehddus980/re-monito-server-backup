import React from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";
import { NavAllContainer, NavListContainer, NavBody } from "../../Presenter/Nav/TopNavPresenter";

const User ={
    Name:"임의연",
}


const TopNav = () => {
    return (
        <>
            <NavBody>
            <NavAllContainer>
                <h1><Link to="./" className="top-nav-title">MONITO</Link></h1>
                <NavListContainer>
                    <Link to ="/StudyGroup" className="top-nav-list"><li >스터디그룹</li></Link>
                    <Link to ="/Calendar" className="top-nav-list"><li>달력</li></Link>
                    <Link to ="/Planner" className="top-nav-list"><li>플래너</li></Link>
                    <Link to ="/UserPageMain" className="top-nav-list"><li >마이페이지</li></Link>
                </NavListContainer>
                    <div className="user-name">{User.Name}님 환영합니다.</div> { /* 이부분 기능구현은 로그인 기능 갖춰지면 넣을예정 */}
            </NavAllContainer>
            </NavBody>
        </>
    )
}

export default TopNav;