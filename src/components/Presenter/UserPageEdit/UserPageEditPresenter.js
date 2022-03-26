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
    font-size: 1.7em;
    text-align: center;
    margin : 0.7em 0em 0.5em 0.4em;
    color: #E9BE81;
    font-weight: bold;
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
    margin-top:0.5em;
    padding:20px;

    font-size:1em;
    border-radius: 1em;
    padding-top:0.4em;
    text-decoration: none;
    border:25%;
    .UserEditBtn{
        padding : 0.7em 1.4em;
        background-color:#E6E6E6;
        color:gray;
        text-decoration:none;
        border-radius: 0.7em;
        font-weight:bold;

        &:hover{
            background: #F9E0BB;
            color:white;
            cursor: pointer;
          }
    }

`;

const UserPageEditBtnSave = styled.div`
    color:#807D7D;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding:20px;
    font-size:1em;
    border-radius: 1em;
    padding-top:0.4em;
    text-decoration: none;
    border:25%;
    margin-top:0.5em;

    .UserEditBtn{
        padding : 0.7em 1.4em;
        background: #F4C782;
        color:white;
        text-decoration:none;
        border-radius: 0.7em;
        font-weight:bold;

        &:hover{
            background-color:#F2A733;
            cursor: pointer;
          }
    }

`;


export { MypageEdit, EditTitle, BackDiv, UserPageEditBtn, UserPageEditBtnSave, UserPageEditBtnGroup};