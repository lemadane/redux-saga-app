import { applyMiddleware, combineReducers, createStore } from 'redux'
import ageReducer from './reducers/ageReducer'
import createSagaMiddleware from 'redux-saga'
import  rootSaga from './saga'

const rootReducer = combineReducers({ ageReducer })
const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
