// Se importa types
import { types } from '../types/types'

const initialState = {
    novedades: [
        {
            id: 'ti-0',
            contenido: 'La pandemia nos demostró cómo las plataformas de nube y la conectividad pueden combinarse para innovar en nuestra forma de trabajar, vivir y conectarnos. Pero a medida que las compañías de telecomunicaciones corren la carrera por aprovechar las tecnologías 5G y Edge, la pregunta crítica que ahora se plantea es: ¿podrán evitar el mismo destino que recientemente tuvieron las compañías de medios heredadas, cuando los hiperescaladores de nube y el streaming  directo al consumidor (OTTs) conspiraron para llevarse la mayor parte de las ganancias en la cadena de valor de los medios',
            fecha: 'Publicado el Jun 8, 2021',
            imagen: 'https://i.ibb.co/q5pJYFF/ti-0.jpg',
            titulo: '¿Cómo serán las empresas de telecomunicaciones en la era 5G y la nube híbrida?',
            url: 'https://www.bbc.com/mundo/topics/cyx5krnw38vt'
        },
        {
            id: 'ti-1',
            contenido: 'La cuarta encuesta anual sobre el uso de la nube de Denodo, proveedor de virtualización de datos, muestra que las organizaciones están acelerando su viaje hacia la nube para aprovechar su flexibilidad, controlar costes, reducir su tiempo de salida al mercado y simplificar su gestión de datos. Así lo confirman las 150 compañías internacionales y profesionales de IT de múltiples sectores encuestados.  Entre sus conclusiones, destacan que los despliegues de nube híbrida continúan siendo su principal preferencia: el 35% de las empresas emplea esta arquitectura. La nube privada representa casi un cuarto (24%) para todas las cargas de trabajo, seguida por las nubes híbridas, cuya adopción permanece estable, para un 16%. El Multi-Cloud es una elección popular para una de cada 10 organizaciones (9%), que optan por implementar las mejores aplicaciones, repositorios de datos y tecnologías de orquestación de infraestructuras entre diferentes proveedores de servicios en la nube: así evitan tener que depender de una sola compañía.',
            fecha: 'Publicado el Jun 1, 2021',
            imagen: 'https://i.ibb.co/LrPqkkR/ti-1.jpg',
            titulo: 'Estudio: 25% de las empresas ya migran sus cargas de trabajo avanzadas hacia la nube',
            url: 'https://www.bbc.com/mundo/topics/cyx5krnw38vt'
        } 
    ],
    active: {
        id: '',
        contenido: '',
        fecha: '',
        imagen: '', 
        titulo: '',
        url: ''
    }
}

export const cargaNovedades = (state = initialState, action) => {
    switch (action.type) {
        case types.uiNovedadesLoad:
            return {
                ...state,
                novedades: [...action.payload]
            }
        default:
        return state;
    }
}