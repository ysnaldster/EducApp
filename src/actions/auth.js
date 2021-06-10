import {types} from '../types/types'
import {googleAuthProvider, firebase, facebookAuthProvider} from '../firebase/firebase-config'
import {starLoading, finishLoading} from './uiError'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { 
        return firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=> {
            dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            dispatch(finishLoading())
            dispatch(starLoading())
        })
        .catch (e => {
            dispatch(finishLoading())
            console.log(e);
        })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => { 
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName, user.email, user.photoURL)
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
                login(user.uid, user.displayName, user.email, user.photoURL)
            )
            console.log(user);
        })
        .catch(e => {
            console.log(e);
        })
        
    }
}

export const login = (uid, displayName, email, image) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            image
        }
    }
}
export const starLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then( async ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber)
                )
            })
            .catch(e => {
                console.log(e);
            }
            )
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