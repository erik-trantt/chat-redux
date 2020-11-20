import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import selectedChannelReducer from './selected_channel_reducer';

// initial State
export const initialState = {
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const identityReducer = (state = null) => state;

// State and reducers
export const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});
