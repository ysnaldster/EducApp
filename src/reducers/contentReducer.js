import { types } from "../types/types";

export const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getContent:
      return {
        ...state,
        content: [...action.payload]
      }

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
