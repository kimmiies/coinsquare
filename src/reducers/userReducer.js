import { GET_ACCOUNT_BALANCE } from './actions'
 
const initialState = {
  id: null,
  name: null,
  email: null,
  accountBalances: [
    'usd': 157.69,
    'btc': 0,
  ]
}
 
const userReducer = (state = initialState, action) => { 
  switch (action.type) {
    case GET_ACCOUNT_BALANCE:
      return {
        ...state,
        id: '123',
      }
    default:
      return state
  }
}

export default userReducer
