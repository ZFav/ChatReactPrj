import "../assets/css/message.css";

export default function Message({ owner, msg }) {
  return (
    <div className={owner ? "message owner" : "message"}>
      <div className="message-wrapper">
               <p>{msg?.message}</p>
      </div>
      <span className="timeline">10 Min fa</span>
    </div>
  );
}
