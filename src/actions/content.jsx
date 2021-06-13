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
      titulo,
      link,
      tipo,
      capacitador,
      miniatura,
      modalidad,
      precio,
      detalles,
      infoExtra,
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

//Elimina la
export const deleteContent = (uid) => {
  return async (dispatch) => {
    const contentRef = await db.collection(`contenido`);
    contentRef.doc(uid).delete();
  };
};
