import userReducer from '../userReducer'
import { BUY, SELL, buy, sell } from '../actions'
 
describe('user reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      id: null,
      name: null,
      email: null,
      usd: 100,
      btc: 0,
    }
  })

  it('should return the initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState)
  })
 
  it('should handle sell', () => {
    const action = sell('usd', 10)
    const updatedState = userReducer(initialState, action)

    expect(updatedState).toEqual({
      ...initialState,
      usd: 90,
    })
  })

  it('should handle buy', () => {
    const action = buy('btc', 100)
    const updatedState = userReducer(initialState, action)

    expect(updatedState).toEqual({
      ...initialState,
      btc: 100,
    })
  })
})
