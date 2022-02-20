import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { insuranceListReducer,insuranceEditReducer} from './reducers/insuranceReducer'
const reducer = combineReducers({
    insuranceList: insuranceListReducer,
    insuranceEdit:insuranceEditReducer
  })
 var initialState
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
