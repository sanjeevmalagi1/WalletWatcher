import { addWalletRequest } from '../apis';

export const ADD_WALLET_REQUEST = 'ADD_WALLET_REQUEST';
export const ADD_WALLET_COMPLETE = 'ADD_WALLET_COMPLETE';
export const ADD_WALLET_FAILED = 'ADD_WALLET_FAILED';


export function addWallet(values,callback){
    return (dispatch,getState) => {
    
        dispatch({ type: ADD_WALLET_REQUEST,payload : values })

        addWalletRequest(values)
          .then(data =>{
            return data.data
          })
          .then( ({success,address}) =>{
            
            if(!success){
              throw new Error("ERROR");
            } 
            else{
              dispatch({ type: ADD_WALLET_COMPLETE,payload : { ...address,addedOn:values.addedOn } })
              callback(true);
            }
          })
          .catch(error =>{
            console.log(error);
            
            dispatch({ type: ADD_WALLET_FAILED,payload : error })
            callback(false);
          })
      }
    
  }