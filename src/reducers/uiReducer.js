import { types } from '../types/types'

const inicialState = {
    loading: false,
    msjError: null
}

export const registro = (state = inicialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msjError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msjError: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        case types.logout:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}