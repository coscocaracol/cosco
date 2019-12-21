import { ref, firebaseAuth } from '../data/config'

// Guardar usuario
const saveUser = (user) => (
  ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user )
)

// Registrar nuevos usuarios
const auth = (email, password) => (
  firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
      .then(saveUser)
)

// Acceso a usuarios existentes
const login = (email, password) => 
  firebaseAuth()
    .signInWithEmailAndPassword(email, password)

// Desloguearse
const logout = () => 
  firebaseAuth()
    .signOut()

// Restablecimiento contraseña usuario
const resetPassword = (email) => 
  firebaseAuth()
    .sendPasswordResetEmail(email)


export {
  saveUser,
  auth,
  login,
  logout,
  resetPassword
}