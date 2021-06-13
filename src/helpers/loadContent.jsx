import { db } from "../firebase/firebase-config";

//Carga todo el contendo de la tabla <contenido>
export const loadContent = async () => {
  const contentSnap = await db.collection("contenido").get();
  const content = [];

  contentSnap.forEach((snapHijo) => {
    content.push({ ...snapHijo.data(), id: snapHijo.id });
  });
  return content;
};

