import {types} from '../types/types'

export const userReducer = ( state = {}, action) => {
      switch (action.type) {
          case types.loadUser:
              return {
                  ...action.payload
              }              
      
          default:
              return state
      }
}
