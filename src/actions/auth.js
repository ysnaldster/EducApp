import {types} from '../types/types'
import {googleAuthProvider, firebase} from '../firebase/firebase-config'
import {starLoading, finishLoading} from './uiError'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { 
        return firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=> {
            dispatch(starLoading)
            dispatch(login(user.uid, user.displayName))
        })
        .catch (e => {
            dispatch(finishLoading)
            console.log(e);
        })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => { 
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
            console.log(user);
        })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => { 
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) => {
            await user.updateProfile({displayName: name})
            dispatch(
                login(user.uid, user.displayName)
            )
            console.log(user);
        })
        .catch(e => {
            console.log(e);
        })
        
    }
}


export const login = (uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

// export const registro = (uid, displayName, email) => {
//     return{
//         type: types.login,
//         payload: {
//             uid,
//             displayName,
//             email
//         }
//     }
// }