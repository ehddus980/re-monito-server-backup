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
    font-size: 24px;
    margin : 4vh 0vh 2vh 1vh;
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

    font-size:2.5vh;
    background-color:white;
    border-radius: 10px;
    padding-top:5px;
    text-decoration: none;
    border:25%;
    .UserEditBtn{
        padding:10px 20px;
        background-color:#E6E6E6;
        color:black;
        text-decoration:none;
        border-radius: 10px;
    }

`;


export { MypageEdit, EditTitle, BackDiv, UserPageEditBtn, UserPageEditBtnGroup};