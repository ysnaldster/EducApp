

//Carga contenido filtrado por el buscador
export const searchFilteredContent = async (clave) => {
    const contenidoRef = await db.collection("contenido");
    const content = [];
  
     const contentFiltered = contenidoRef.where("titulo","==","Iterativo 1").get()
  
  
     contentFiltered.forEach((snapHijo) => {
      content.push({ ...snapHijo.data(), id: snapHijo.id });
    });
    return content;
  };