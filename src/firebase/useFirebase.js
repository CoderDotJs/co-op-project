import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from './firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // user registration
    const createUser = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                }).catch((error) => {

                });
                setUser(newUser)
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // Sign In User by Form
    const SignInUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // observer user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);

    // google login function
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // console.log(user)
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // log out function
    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInWithGoogle,
        authError,
        createUser,
        SignInUser,
        logOut
    }
};

export default useFirebase;
