import { ADD_WALLET_COMPLETE } from '../actions';

export default function(state={},action){
  switch (action.type) {
    case ADD_WALLET_COMPLETE:{
        const { address } = action.payload;
        
        return { 
          ...state, 
          [address] : action.payload 
        };
    }
    default:
      return state;
  }
}
