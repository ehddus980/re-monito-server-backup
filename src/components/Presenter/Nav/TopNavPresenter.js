import styled from "styled-components";

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');
</style>

const NavBody = styled.div`
    font-size:large;
    font-family: 'Noto Sans KR', sans-serif;
`

const NavAllContainer = styled.div`
    position: fixed;
    right:0px;
    left:0;
    padding:2%;
    top: 0;
    padding-bottom:2vh;
    background-color:rgba(255, 255, 255, 0.8);
    display : flex;
    justify-content: space-between;
    .top-nav-title{
        text-decoration: none; 
        justify-content: space-between;  
        color: rgb(238, 189, 82);
        font-family: 'Jua', sans-serif;
    }
    .top-nav-title:hover{
        color: rgb(196, 155, 67);
        text-decoration: none; 
        justify-content: space-between;  
        font-family: 'Jua', sans-serif;
    }
`
const NavListContainer = styled.div`
    display:flex;
    justify-content: space-between;
    list-style: none;
    width:40%;
    height:10%
    li {
        color:black;
    }
    li:hover {
        color:black;
        font-weight: 900;
        font-size:large;
    }
    .top-nav-list{
        color:black;
        text-decoration: none; 
        display:flex;
        padding-bottom: 4px;
        position:relative;
        align-items: flex-end;
    }
    .top-nav-list::after{
        content: "";
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 4px;
        background: #f1c40f;
        transition: all .5s ease-out;
      }
      .top-nav-list:hover::after{
        width: 100%;
      }
      .top-nav-list:hover {
        text-decoration: none;
        color: rgb(43, 43, 43);
        font-size: medium;
        font-weight: bold;
      }
      .user-name{
          padding-right:2%;
      }
`
const BottomBody = styled.div`
    padding-top:15vmin;
`
export { NavBody, NavAllContainer, NavListContainer,BottomBody };