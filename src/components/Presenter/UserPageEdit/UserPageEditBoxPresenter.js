import styled from "styled-components";

const BackDiv = styled.div`
    background-color: #EDDDB8;
    background: repeating-linear-gradient(to right, rgb(252, 238, 196), #FCE9CE 200px, #FCFBF9 200px, #FCFBF9 872px);
    height: 484px;
    width: 872px;
    box-shadow : 3px 3px 10px 2px #DBD9D6;
`;

const Editname = styled.div`
font-size: 17px;
margin: 3vh;
height:10vh;
font-weight: bold;
width:200px;
`;

const EditText = styled.div`
font-size: 17px;
margin: 3vh 0vh;
height:10vh;
`;

export {BackDiv, Editname ,EditText};