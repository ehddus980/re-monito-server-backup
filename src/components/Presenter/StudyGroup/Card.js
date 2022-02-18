import "./card.css";

export default function Card({ card }) {
  // console.log(card);
  const { roomname, recruit, member, score } = card;
  
  return (
    <>
      <div className="card_header">{roomname}</div>
      <div className="recruit_num">{recruit}</div>
      <div className="card_info">
        <span>그룹 집중 점수: {score}</span>
        <div className="member_num">{member}/40</div>
        
      </div>
    </>
  );
}
