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
        link: action.payload.link,
        tipo: action.payload.tipo,
        capacitador: action.payload.capacitador,
        miniatura: action.payload.miniatura,
        modalidad: action.payload.modalidad,
        precio: action.payload.precio,
        detalles: action.payload.detalles,
        infoExtra: action.payload.infoExtra
      };

    case types.deleteContent:
      return state;

    default:
      return state;
  }
};
