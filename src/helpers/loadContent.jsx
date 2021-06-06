import { db } from "../firebase/firebase-config";

export const loadContent = async () => {
  const contentSnap = await db.collection("contenido").get();
  const content = [];

  contentSnap.forEach( snapHijo => {
    content.push(
      snapHijo.data()
    );
  });
  return content;
};
