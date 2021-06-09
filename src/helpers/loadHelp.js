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
