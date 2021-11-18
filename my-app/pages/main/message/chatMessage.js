import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const MessageCard = ({ data, isMine, showTimeStamp }) => {
  const friendlyTimeStamp = moment(data.timestamp).format("LL");
  const formattedTime = moment(data.timestamp).format("a h:mm");

  // console.log('data : ', data.type)
  // console.log('data : ', data)
  return (
    <React.Fragment>
      <div className={["message", `${isMine ? "mine" : ""}`].join(" ")}>
        {showTimeStamp && <div className="time-stamp">{friendlyTimeStamp}</div>}
        <div className="bubble-container">
          {isMine && (
            <div className="time-left">
              <div className="txt-bottom">{formattedTime}</div>
            </div>
          )}
          {data.type === "text" ? (
            <div className="bubble" title={friendlyTimeStamp}>
              {data.message}
            </div>
          ) : (
            <div className="bubble" title={friendlyTimeStamp}>
              <div className="chat-img">
                <img src={data.image} />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessageCard;
