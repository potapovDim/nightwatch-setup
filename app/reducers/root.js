import {createStore, combineReducers} from 'redux'
import relatives from './relatives'

export const store = createStore(combineReducers({
  relatives
}))

