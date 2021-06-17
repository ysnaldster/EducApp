import { types } from '../types/types'
import { googleAuthProvider, firebase, facebookAuthProvider } from '../firebase/firebase-config'
import { starLoading, finishLoading } from './uiError'
import { fileUpload } from '../helpers/fileUpload'
import { db } from "../firebase/firebase-config";
import { loadUserData } from '../helpers/loadHelp'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
                dispatch(finishLoading())
                dispatch(starLoading())
            })
            .catch(e => {
                dispatch(finishLoading())
                console.log(e);
            })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL)
                )
                console.log(user);

                const data = await loadUserData(user.uid);

                if (data.length < 1) {
                    const newUser = {
                        nombre: user.displayName,
                        email: user.email,
                        direccion: '',
                        area1: '',
                        area2: ''
                    }
                    await db.collection(`profile/${user.uid}/personalData`).add(newUser)
                }
                dispatch(startLoadingUser(user.uid))
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL)
                )
                console.log(user);


                const data = await loadUserData(user.uid);

                if (data.length < 1) {
                    const newUser = {
                        nombre: name,
                        email: email,
                        direccion: '',
                        area1: '',
                        area2: ''
                    }
                    await db.collection(`profile/${user.uid}/personalData`).add(newUser)
                }
            })
            .catch(e => {
                console.log(e);
            })

    }
}

export const login = (uid, displayName, email, image) => {
    return {
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
            .then(async ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL)
                )

                const data = await loadUserData(user.uid);

                if (data.length < 1) {
                    const newUser = {
                        nombre: user.displayName,
                        email: user.email,
                        direccion: '',
                        area1: '',
                        area2: ''
                    }
                    await db.collection(`profile/${user.uid}/personalData`).add(newUser)
                }
                dispatch(startLoadingUser(user.uid))
            })
            .catch(e => {
                console.log(e);
            }
            )
    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const userData = getState().auth;
        const user = firebase.auth().currentUser
        const fileUrl = await fileUpload(file);

        user.image = fileUrl
        await user.updateProfile({photoURL: user.image})
        console.log(user);
        dispatch(login(userData.uid, userData.name, userData.email, userData.image))
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }
}

export const startDataUser = () => {
    return async (dispatch, getState) => {
        const dataUser = getState().user;
        console.log(dataUser);
    }
}

export const startSaveUser = (user) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        console.log(user);
        console.log(uid);

        const userToFirestore = { ...user };
        delete userToFirestore.id;

        await db.doc(`/profile/${uid}/personalData/${user.id}`).update(userToFirestore);

        dispatch(setUser(user.id, userToFirestore));

        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
}

export const setUser = (user) => ({
    type: types.loadUser,
    payload: user
});

export const startLoadingUser = (id) => {
    return async (dispatch) => {

        const user = await loadUserData(id);
        dispatch(setUser(user));
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