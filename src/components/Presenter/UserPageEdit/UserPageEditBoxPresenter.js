import styled from "styled-components";

const BackDiv = styled.div`
    background-color: #EDDDB8;
    background: repeating-linear-gradient(to right, rgb(252, 238, 196), #FCE9CE 13em, #FCFBF9 13em, #FCFBF9 55em);
    height: 35em;
    width: 55em;
    box-shadow : 0.2em 0.2em 0.7em 0.2em #DBD9D6;
`;

const Editname = styled.div`
font-size: 1.1em;
margin: 1em;
height:6em;
font-weight: bold;
width:13em;
`;

const EditText = styled.div`
font-size: 1em;
margin: 1em 0em;
height:6em;
`;

const Btnspace = styled.div`

`;

export {BackDiv, Editname ,EditText, Btnspace};