import styled from "styled-components";

const BackDiv = styled.div`
height: 100vh;
`;

const MypageFlex = styled.div`
    display: flex;
`;

const Edit = styled.div`
width: 500px;
height: 250px;
background:linear-gradient(80deg,rgb(252, 238, 196), #FCE9CE);
margin-top: 30px;
margin: 30px auto ;
flex-direction: row;
border-radius: 12.5px;
padding: 1em;
`;

const Measurement = styled.div`
width: 500px;
    height: 250px;
    background:linear-gradient(80deg,rgb(252, 238, 196), #FCE9CE);
    margin-top: 30px;
    margin: 30px auto ;
    flex-direction: row;
    border-radius: 12.5px;
    padding: 1em;
`;

const PoseHeart = styled.div`
width: 500px;
    height: 250px;
    background:linear-gradient(80deg,rgb(252, 238, 196), #FCE9CE);
    margin-top: 30px;
    margin: 30px auto ;
    flex-direction: row;
    border-radius: 12.5px;
    padding: 1em;
`;

const Dday = styled.div`
width: 500px;
    height: 250px;
    background:linear-gradient(80deg,rgb(252, 238, 196), #FCE9CE);
    background-color: #EDDDB8;
    margin-top: 30px;
    margin: 30px auto ;
    flex-direction: row;
    border-radius: 12.5px;
    padding: 1em;
`;

const UserPageBox = styled.div`
    height: 150px;
`;

const UserPageTitle = styled.div`
font-weight: bold;
font-size:2.7vh;
margin-left:1vh;
`;

const UserBtn = styled.div`
    text-align: center;
    width:11vh;
    height:5vh;
    background-color:white;
    border-radius: 10px;
    padding-top:5px;
    text-decoration: none;
    border:25%;
    .UserPageBtn{
        color:black;
        text-decoration:none;
    }
    
`;

export { Edit, Measurement, PoseHeart, Dday, MypageFlex, BackDiv, UserPageTitle, UserPageBox, UserBtn};