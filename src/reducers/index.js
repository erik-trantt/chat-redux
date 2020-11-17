import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import selectedChannelReducer from './selected_channel_reducer';

// initial State
export const initialState = {
  messages: [],
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
