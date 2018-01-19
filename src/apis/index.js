import axios from 'axios';

const ROOT_URL = 'https://api.smartbit.com.au/v1/blockchain';

export function addWalletRequest({ id:address }){
    return axios.get(`${ROOT_URL}/address/${address}`);
}

