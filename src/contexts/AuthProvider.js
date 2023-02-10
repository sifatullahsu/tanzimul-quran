import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../queries/users';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);


  const userLogin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userRegister = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userLogout = () => {
    return signOut(auth);
  }

  const updateUserProfile = arg => {
    setUserLoading(true);
    return updateProfile(auth.currentUser, arg)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser?.uid) {
        getUser(currentUser.uid)
          .then(result => {

            if (result?.status) {
              setUser({ ...currentUser, localData: result.data });
              setUserLoading(false);
            }
            else {
              setUser(null);
              setUserLoading(false);
            }

          })
          .catch(err => {
            setUser(null);
            setUserLoading(false);
          })
      }
      else {
        setUser(null);
        setUserLoading(false);
      }

    });

    return () => {
      unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    userLoading, setUserLoading,
    userLogin,
    userRegister,
    userLogout,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;