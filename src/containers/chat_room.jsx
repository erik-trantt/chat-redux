import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="chat">
      <div className="head">
        <span className="sender">{author}</span>
        <span className="time"> - {time}</span>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
};

const Input = () => {
  return (
    <div className="input">
      <form className="form-inline">
        <div className="form-row">
          <input type="text" name="message" className="form-control" id="message-input" />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderChatList = () => {
    return (
      <div className="chat-list horizontal-line">
        <Message message={{ author: "ssaunier", content: "Hellow world!!", created_at: "2020-10-26T20:10:45" }} />
        <Message message={{ author: "edward", content: "Hi :)", created_at: "2020-10-26T20:11:15" }} />
        <Message message={{ author: "papillard", content: "How are you guys? Having fun with React and Redux?", created_at: "2020-10-26T20:11:55" }} />
      </div>
    );
  }

  render() {
    return (
      <section className="chatroom">
        <h2 className="headers horizontal-line">Channel #general</h2>
        { this.renderChatList() }
        <Input />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

// export default ChatRoom;
export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
