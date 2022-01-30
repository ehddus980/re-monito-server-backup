import styled from "styled-components";

const AlignTitle = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 3%;
    .title-now-month li{
        font-size:large;
        list-style: none;
        display:inline;
    }
    .title-now-month input{
        color:white;
        padding:10px 15px;
        border:white;
        border-radius:5px;
        background-color: rgb(243, 203, 118);
    }
    .title-now-month input:hover{
        color:white;
        padding:10px 15px;
        border:white;
        background-color: rgb(194, 161, 90);
    }
    .today-title{
        padding:50px;
    }
`

export { AlignTitle };