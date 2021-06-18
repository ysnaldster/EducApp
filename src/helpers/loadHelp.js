import { db } from "../firebase/firebase-config"

export const loadNovedades = async (id) => {
    const novedadesSnap = await db.collection(`/novedades/${id}/noticias`).get();
    const novedades = [];

    novedadesSnap.forEach(p => {
        novedades.push({
            id: p.id,
            ...p.data()
        })
    })

    return novedades;
}

export const loadUserData = async (id) => {

    const userSnap = await db.collection(`/profile/${id}/personalData`).get();
    const user = [];

    userSnap.forEach(snapHijo => {
        user.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return user;
}

export const loadSearch = async (search) => {
    const busquedaG = await db.collection(`/contenido`).get();
    const resultado = [];

    busquedaG.forEach(snapHijo => {
        resultado.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    const encontrado = resultado.filter(curso => curso.titulo.toLowerCase().includes(search))
    return encontrado;
}