import styled from "styled-components";

const BackDiv = styled.div`
height: 484px;
width: 872px;
margin-left: auto;
margin-right: auto;
height: 100vh;
`;

const MypageEdit = styled.div`

`;

const EditTitle = styled.div`
    font-size: 1.5em;
    margin : 0.7em 0em 0.5em 0.4em
`;

const UserPageEditBtnGroup = styled.div`
    margin-top: 1em;;
    text-align: center;
    display: flex;
`;

const UserPageEditBtn = styled.div`
    color:#807D7D;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    padding:20px;

    font-size:1em;
    background-color:white;
    border-radius: 1em;
    padding-top:0.4em;
    text-decoration: none;
    border:25%;
    .UserEditBtn{
        padding : 0.7em 1.4em;
        background-color:#E6E6E6;
        color:black;
        text-decoration:none;
        border-radius: 0.7em;
    }

`;


export { MypageEdit, EditTitle, BackDiv, UserPageEditBtn, UserPageEditBtnGroup};