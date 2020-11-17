import React from 'react';

const Chat = (props) => {
  return (
    <div className="chat">
      <div className="head">
        <span className="sender">{props.sender}</span>
        <span className="time"> - {props.time}</span>
      </div>
      <div className="content">
        {props.content}
      </div>
    </div>
  );
};

const ChatRoom = (props) => {
  return (
    <section className="chatroom">
      <h2 className="headers horizontal-line">Channel #general</h2>
      <div className="chat-list">
        <Chat sender="ssaunier" content="Hellow world!!" time="20:10:45" />
        <Chat sender="edward" content="Hi :)" time="20:11:15" />
        <Chat sender="papillard" content="How are you guys? Having fun with React and Redux?" time="20:11:55" />
      </div>
    </section>
  );
};

export default ChatRoom;
