import "./index.css";

const message = "This page is currently only using fake products";
const Message = () =>
  message && (
    <div className="message">
      <p>{message}</p>
    </div>
  );

export default Message;
