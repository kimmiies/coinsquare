/* Actions Types */
export const BUY = "BUY"
export const SELL = "SELL"


/* Actions Creators */
export function buy(currency, price){
  return {
    type: BUY,
    currency,
    price,
  }
}

export function sell(currency, price){
  return {
    type: SELL,
    currency,
    price,
  }
}
