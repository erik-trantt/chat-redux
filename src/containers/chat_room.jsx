import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import MessageInput from './message_input';

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

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referesher: null
    };
    this.fetchMessages();
  }

  componentDidMount() {
    this.referesher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.referesher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <section className="chatroom">
        <h2 className="headers horizontal-line">Channel #{this.props.selectedChannel}</h2>
        <div className="chat-list horizontal-line" ref={(list) => { this.list = list; }}>
          {this.props.messages.map(message => <Message key={message.id} message={message} />)}
        </div>

        <MessageInput />
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
