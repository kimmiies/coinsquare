import { BUY, SELL } from './actions'
 
const initialState = {
  id: null,
  name: null,
  email: null,
  usd: 156.12,
  btc: 0,
}
 
const userReducer = (state = initialState, action) => { 
  switch (action.type) {
    case SELL:
      const decreasedBalance = (state[action.currency] - action.price).toFixed(3)

      return {
        ...state,
        [action.currency]: parseFloat(decreasedBalance),
      }
    case BUY:
      const increasedBalance = (state[action.currency] + action.price).toFixed(3)

      return {
        ...state,
        [action.currency]: parseFloat(increasedBalance),
      }
    default:
      return state
  }
}

export default userReducer
