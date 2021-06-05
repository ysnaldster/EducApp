import { types } from "../types/types";

const initialState = {
    content:[],
    active:null
}

export const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getContent:
      return state;

    case types.uploadContent:
      return {
        titulo: action.payload.titulo,
        tipo: action.payload.tipo,
        profesor: action.payload.profesor,
        precio: action.payload.precio,
      };

    case types.deleteContent:
      return state;

    default:
      return state;
  }
};
