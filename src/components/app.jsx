import React from 'react';
import Workspace from './workspace';
import ChannelList from '../containers/channel_list';
import ChatRoom from '../containers/chat_room';

const App = () => {
  return (
    <div className="app">
      <Workspace />
      <ChannelList />
      <ChatRoom />
    </div>
  );
};

export default App;
