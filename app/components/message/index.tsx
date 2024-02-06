import "./index.css"

const message = null
const Message = () =>
  message && (
    <div className="message">
      <p>{message}</p>
    </div>
  )

export default Message
