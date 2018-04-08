import { IS_TRADE_ENABLED } from './actions'
 
const initialState = {
  isTradeEnabled: false,
}
 
const globalUiReducer = (state = initialState, action) => { 
  switch (action.type) {
    case IS_TRADE_ENABLED:
      return {
        ...state,
        isTradeEnabled: true,
      }
    default:
      return state
  }
}

export default globalUiReducer
