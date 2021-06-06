import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import {loadContent} from "../helpers/loadContent"

// export const startPublicarContent = (titulo, tipo, profesor, precio) => {
//   return (dispatch) => {
//       dispatch(publicarContent(titulo, tipo, profesor, precio));
//   };
// };

// export const publicarContent = (titulo, tipo, profesor, precio) => {
//   return {
//     type: types.uploadContent,
//     payload: {
//       titulo,
//       tipo,
//       profesor,
//       precio
//     },
//   };
// };

export const startPublicarContent = (titulo, tipo, profesor, precio) => {
  return async (dispatch) => {
    const newContent = {
      titulo: titulo,
      tipo: tipo,
      profesor: profesor,
      precio: precio,
    };
    const docRef = await db.collection(`contenido`).add(newContent);
    console.log("xxx:", docRef);
  };
};

export const startGetContent=()=>{
  return async (dispatch)=>{    
    const content =  await loadContent()
    dispatch(setContent(content))
  }
}

export const setContent = (content) => ({
  type:types.getContent,
  payload: content
})
