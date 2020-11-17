import React from 'react';

const Channel = (props) => {
  return <li className="list-group-item"><a href={props.url}>#{props.name}</a></li>;
};

const tempChannels = [
  {
    name: "general",
    url: "#"
  },
  {
    name: "react",
    url: "#"
  },
  {
    name: "paris",
    url: "#"
  }
];

const generateChannelList = () => {
  return (
    <div className="channel-list">
      <ul className="list-group">
        {tempChannels.map((channel) => {
          return <Channel name={channel.name} url={channel.url} />;
        })}
      </ul>
    </div>
  );
};

const ChannelWindow = (props) => {
  return (
    <section className="channel-window">
      <h2 className="headers">Redux Chat</h2>
      { generateChannelList() }
    </section>
  );
};

export default ChannelWindow;
