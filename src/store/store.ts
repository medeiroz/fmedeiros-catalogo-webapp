import { createStore, combineReducers } from 'redux'
import CounterReducer from './Counter/Counter.reducer'

const rootReducer = combineReducers({
  counter: CounterReducer
});

const store = createStore(rootReducer)

export default store
