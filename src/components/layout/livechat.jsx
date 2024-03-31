import { useState } from "react";
import style from "../../static/styles/Livechat.module.scss";
import { FaFacebookMessenger } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { FaSmile } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <div
        className={`${style["floating-live-chat"]} ${isOpen ? style.open : ""}`}
      >
        {isOpen && (
          <div className={style["chat-iframe"]}>
            <span className={style.title}>
              <h4>Customer Support</h4>
              <button>Let's chat app</button>
            </span>
            <span className={style.mess}>
              <input type="text" placeholder="Enter Message!" />
              <GoPaperclip className={`${style.icon} ${style.iconSub}`} />
              <FaSmile className={`${style.icon} ${style.iconSub}`} />
              <IoMdSend className={`${style.icon} ${style.iconSend}`} />
            </span>
          </div>
        )}
        <span className={style["chat-toggle-btn"]} onClick={toggleChat}>
          <FaFacebookMessenger />
        </span>
      </div>
    </>
  );
};

export default LiveChat;
