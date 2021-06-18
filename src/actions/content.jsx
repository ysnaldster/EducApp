import React,{useState} from 'react'
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadContent } from "../helpers/loadContent";
import { searchFilteredContent } from "../helpers/searchFilteredContent";
import {loadSearch} from '../helpers/loadHelp'

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
  plataforma,
  tematica
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
      plataforma,
      tematica
    };
    const docRef = await db.collection(`contenido`).add(newContent);

    dispatch(startGetContent(docRef));
  };
};

//Obtener contenido
export const startGetContent = () => {
  return async (dispatch) => {
    const content = await loadContent();
    dispatch({type: types.getContent,
      payload: content});
    // dispatch(setContent(content));
  };
};

//Llama a reducer que agrega nuevo contenido al state
export const setContent = (content) => ({
  type: types.getContent,
  payload: content,
});

//Llama a reducer que agrega nuevo contenido al state - además pasa un state filtered a "true"
export const setContentFiltered = (content,keyword) => ({
  type: types.getContentFiltered,
  payload: content,
  keyword
});

//Elimina un elemento del state
export const deleteContent = (uid) => {
  return async (dispatch) => {
    const contentRef = await db.collection(`contenido`);
    contentRef.doc(uid).delete();
    dispatch(
      {type: types.deleteContent}
      )
  };
};

export const searchContentWithFilter = (keyword) =>{
  console.log("Palabra clave" + keyword);
  return async (dispatch) => {
    const content = await searchFilteredContent(keyword);
    dispatch(setContentFiltered(content,keyword));
  };
}


export const startSearch = (search) => {
  return async (dispatch) => {
      const curso = await loadSearch(search)
      dispatch(setSearch(curso))
  }
}

export const setSearch = (curso) => ({
    type: types.searchCursos,
    payload: curso
})

