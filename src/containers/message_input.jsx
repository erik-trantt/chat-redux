import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    // calling createMessage
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value);

    this.setState({ value: '' }); // reset input message
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            name="message"
            id="message-input"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}
// export default MessageInput;
export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
