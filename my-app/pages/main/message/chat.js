import React, { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Message from "./chatMessage";
import moment from "moment";
import io from "socket.io-client";

function getCurrentTime() {
  let date = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
  date = new Date(date);

  Date.prototype.YYYYMMDDHHMMSS = function () {
    const yyyy = this.getFullYear().toString();
    const MM = pad(this.getMonth() + 1, 2);
    const dd = pad(this.getDate(), 2);
    const hh = pad(this.getHours(), 2);
    const mm = pad(this.getMinutes(), 2);
    const ss = pad(this.getSeconds(), 2);

    return yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
  };
  function pad(number, length) {
    let str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  return date.YYYYMMDDHHMMSS();
}

const socket = io("http://127.0.0.1:4000", {
  autoConnect: false,
  forceNew: true,
});
let connected = false;

const ChatComp = React.memo(({ user_idx }) => {
  console.log("ChatComp user_idx : ", user_idx);

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [imgFile, setImgFile] = useState();
  const [userName, setUserName] = useState("");

  const fileInputReference = useRef(null);
  const listReference = useRef(null);
  const sendBtnReference = useRef(null);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!message) {
      return alert("메세지를 입력해주세요");
    }
    // 메세지 DB 저장
    let newMsg = {
      type: "text",
      message: message,
      timestamp: getCurrentTime(),
      sender: user_idx,
    };
    socket.emit("send", newMsg);

    setMessageList((prevState) => [...prevState, newMsg]);

    setMessage("");
  };

  const handleChangeFile = async (e) => {
    setImgFile(e.target.files[0]);
  };

  const sendMessageImage = async () => {
    // 이미지 DB 저장
    setImgFile(null);
  };

  const handleClickFile = (e) => {
    e.preventDefault();
    fileInputReference.current.click();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const sendBtn = sendBtnReference.current;
      sendBtn.click();
    }
  };

  useEffect(() => {
    socket.once("error", (error) => {
      socket.removeListener("connect");
      console.log("error : " + new Error(error));
    });

    socket.once("connect", () => {
      socket.emit("join room", { room: 3 }, (err) => {
        console.log("join room err : ", err);
      });
      socket.on("receive join room", (msg) => {
        console.log("receive join room : ", msg);
      });
      socket.on("msg", (msg) => {
        console.log("on msg : ", msg);
        setMessageList((prevState) => [...prevState, msg]);
      });
    });

    if (!connected) {
      console.log("connect!");
      socket.connect();
      connected = true;
      console.log("ConversationScreen connect call");
    }
  }, []);

  useEffect(() => {
    if (messageList.length > 0) {
      const chatList = listReference.current;
      // chatList.scrollTop = chatList.scrollHeight;
      chatList.scrollIntoView(false);
    }
  }, [messageList]);

  useEffect(() => {
    if (imgFile) {
      sendMessageImage();
    }
  }, [imgFile]);

  return (
    <>
      <div className="chat-container">
        <div className="body">
          <div className="message-list">
            {messageList.length > 0
              ? messageList.map((item, index, array) => {
                  if (index === 0) {
                    return (
                      <Message
                        key={"message-list-" + index}
                        data={item}
                        isMine={user_idx === item.sender && true}
                        showTimeStamp={true}
                      />
                    );
                  } else {
                    let prevItem = array[index - 1];
                    let prevDate = moment(prevItem.timestamp);
                    let currentDate = moment(item.timestamp);
                    return (
                      <Message
                        key={"message-list-" + index}
                        data={item}
                        isMine={user_idx === item.sender && true}
                        showTimeStamp={
                          moment
                            .duration(currentDate.diff(prevDate))
                            .as("days") < 1
                            ? false
                            : true
                        }
                      />
                    );
                  }
                })
              : null}
          </div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={listReference}
          ></div>
        </div>
        <div className="footer">
          <div className="flex-group">
            <img
              className="gallery"
              src="/images/chat/camera.svg"
              onClick={handleClickFile}
            />
            <div className="input-group">
              <input
                className="message"
                placeholder="메시지 보내기..."
                value={message}
                onChange={handleChangeMessage}
                onKeyPress={handleKeyPress}
              ></input>
              <img
                ref={sendBtnReference}
                className="send-message"
                src="/images/chat/chat_btn.svg"
                onClick={sendMessage}
              />
            </div>
          </div>
          <input
            type="file"
            name="file"
            style={{ display: "none" }}
            ref={fileInputReference}
            onChange={handleChangeFile}
          />
        </div>
      </div>
    </>
  );
});

export default React.memo(ChatComp);
