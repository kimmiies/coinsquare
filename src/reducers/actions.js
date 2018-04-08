/* Actions Types */
export const GET_ACCOUNT_BALANCE = "GET_ACCOUNT_BALANCE"
export const IS_TRADE_ENABLED = "IS_TRADE_ENABLED"


/* Actions Creators */

/* ----------------------------
 * Keeping things simple for first iteration
 * The functionality of these action creators and their relation to state will change
 * No payload. Simply want to test that reducers are doing their job when actions are dispatched
 *-------------------------------*/

export function getAccountBalance(){
  return {
    type: GET_ACCOUNT_BALANCE,
  }
}

export function isTradeEnabled(){
  return {
    type: IS_TRADE_ENABLED,
  }
}
