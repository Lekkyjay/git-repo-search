import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reposReducer } from './reducers/repos.reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  repos: [],
  loading: false,
  qStr: '',
  history: JSON.parse(localStorage.getItem('history')) || [],
  error: null
}

const store = createStore(reposReducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store