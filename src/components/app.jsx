import React from 'react';
import Workspace from './workspace';
import ChannelWindow from '../containers/channel_window';
import ChatRoom from '../containers/chat_room';

const App = () => {
  return (
    <div className="app">
      <Workspace />
      <ChannelWindow />
      <ChatRoom />
    </div>
  );
};

export default App;
