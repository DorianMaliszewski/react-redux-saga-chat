// export * from './utilisateur';
// export * from './websocket';
import * as chat from './chat';
import * as utilisateur from './utilisateur';
import { combineReducers } from 'redux';

export default combineReducers({
  chat,
  utilisateur
});
