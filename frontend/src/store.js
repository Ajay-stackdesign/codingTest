import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducer/userReducer"


const reducer = combineReducers({
    user: userReducer,

})

let initialStage = {
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store