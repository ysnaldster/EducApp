import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startPublicarContent = (titulo, tipo, profesor, precio) => {
  return (dispatch) => {
      dispatch(publicarContent(titulo, tipo, profesor, precio));
  };
};

export const publicarContent = (titulo, tipo, profesor, precio) => {
  return {
    type: types.uploadContent,
    payload: {
      titulo,
      tipo,
      profesor,
      precio
    },
  };
};

// export const startNewContent = () =>{
//     return async (dispatch,getState) => {

//         const newContent = {
//             titulo: "",
//             tipo:"",
//             profesor:"",
//             precio:"",
//             fecha: new Date().getTime()
//         }

//         const docRef = await db.collection(`contenido/cursos`).add(newContent)

//         console.log(docRef)

//     }
//}
