import styled from "styled-components";

const BackDiv = styled.div`
    text-align: center;
    padding: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    background-color: rgb(247, 247, 247);
    width: 600px;
    border-radius: 1.5em;
`;

const Mtitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin:1vh;
`;

const Mtime = styled.div`
    text-align:right;
    margin-right:4vh;
`;

const Mdate = styled.div`
    text-align:right;
    margin-right:4vh;
`;

const Mchart = styled.div`
    margin:10vh;
`;

const Msolution = styled.div`
    margin-bottom:2vh;
`;


export {BackDiv,
    Mtitle,
    Mdate,
    Mtime,
    Mchart,
    Msolution};