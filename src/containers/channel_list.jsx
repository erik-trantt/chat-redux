import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleChannelClick(channel) {
    this.props.selectChannel(channel);
  }

  generateChannel = (channel) => {
    return (
      <li className="list-group-item" key={channel} >
        <a href={`#${channel}`} onClick={() => this.handleChannelClick(channel)}>#{channel}</a>
      </li>
    );
  }

  render() {
    return (
      <section className="channel-window">
        <h2 className="headers">Redux Chat</h2>
        <ul className="list-group">
          { this.props.channels.map(this.generateChannel) }
        </ul>

      </section>
    );
  }
}

// REDUX FUNCTIONS
function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

// export default ChannelList;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
