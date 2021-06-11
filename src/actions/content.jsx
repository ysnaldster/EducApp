import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadContent } from "../helpers/loadContent";

//Publicar contenido
export const startPublicarContent = (
  titulo,
  link,
  tipo,
  capacitador,
  miniatura,
  modalidad,
  precio,
  detalles,
  infoExtra
) => {
  return async (dispatch) => {
    const newContent = {
      titulo: titulo,
      link: link,
      tipo: tipo,
      capacitador: capacitador,
      miniatura: miniatura,
      modalidad: modalidad,
      precio: precio,
      detalles: detalles,
      infoExtra: infoExtra,
    };
    const docRef = await db.collection(`contenido`).add(newContent);

    dispatch(startGetContent(docRef));

    
  };
};

//Obtener contenido
export const startGetContent = () => {
  return async (dispatch) => {
    const content = await loadContent();
    dispatch(setContent(content));
  };
};

//Llama a reducer que agrega nuevo contenido al state
export const setContent = (content) => ({
  type: types.getContent,
  payload: content,
});
