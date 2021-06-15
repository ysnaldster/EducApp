import { db } from "../firebase/firebase-config";

//Carga contenido filtrado por el buscador
export const searchFilteredContent = async (keyword) => {
    const contenidoRef =  db.collection("contenido");
    const content = [];

     const contentFiltered = await contenidoRef.where("titulo"||"tipo","==",keyword).get()
    console.log(keyword)
     contentFiltered.forEach((snapHijo) => {
      content.push({ ...snapHijo.data(), id: snapHijo.id });
    });
    console.log(content);
    return content;
  };