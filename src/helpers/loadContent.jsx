import { db } from "../firebase/firebase-config";

//Carga todo el contendo de la tabla <contenido>
export const loadContent = async () => {

  //Trae todo el contenido de la base de datos
  const contentSnap = await db.collection("contenido").orderBy("titulo").get();

  //Arreglo donde se guargará todo el contenido de la base de datos
  const content = [];

  //Bucle que introduce uno por uno los recursos de la base de datos en el arreglo <content>
  contentSnap.forEach((snapHijo) => {
    content.push({ ...snapHijo.data(), id: snapHijo.id });
  });
  return content;
};

