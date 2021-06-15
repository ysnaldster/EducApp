import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { authReducer } from '../reducers/authReducer'
import {registro} from '../reducers/uiReducer'
import {cargaNovedades} from '../reducers/cargaNovedades'
import thunk from 'redux-thunk'
import { contentReducer } from '../reducers/contentReducer'

const reducers = combineReducers({
    auth: authReducer,
    error: registro,
    noticiasNovedades: cargaNovedades,
    content: contentReducer
    // ui: registro
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);