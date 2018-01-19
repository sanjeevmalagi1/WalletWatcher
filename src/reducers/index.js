import { combineReducers } from 'redux';

import WalletsReducer from './reducer_wallets';

const rootReducer = combineReducers({
  wallets: WalletsReducer
});

export default rootReducer;
