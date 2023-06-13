import { createContext, useEffect, useState } from 'react'
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  
  signInWithEmailAndPassword,
  
  signInWithPopup,
  
  signOut,
  
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'
import axios from 'axios'
import { getRole } from '../api/Auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState(null)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    if (user) {
      getRole(user.email).then(data => setRole(data))
    }
  }, [user])

 
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
 

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('current user', currentUser)
      // get and set token
      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data => {
          localStorage.setItem('access-token', data.data.token)
        })
      }
      else{
        localStorage.removeItem('access-token')
      }


      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    signIn,
    signInWithGoogle,
    logOut,
    role,
    setRole,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;