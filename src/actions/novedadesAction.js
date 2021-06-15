import { loadNovedades } from '../helpers/loadHelp'
import {types} from '../types/types'


export const novedadesLoad = (id) => {
    return async(dispatch) => {
        const novedades = await loadNovedades(id)
        dispatch(setNovedades(novedades))
    }
}

export const setNovedades = (novedades) => {
    return {
        type: types.uiNovedadesLoad,
        payload: novedades 
    }
}

