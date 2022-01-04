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
                const newUser = { email, displayName: name, roll: "client" };

                // add user in database
                saveUserDB(newUser);

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
                const addUser ={
                    email: user.email,displayName:user.displayName, roll: "client"
                }
                // console.log(user.email)
                isAddUser(user.email, addUser);

                

                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

       //save user  in database
       const saveUserDB = (user) =>{
        fetch('https://softy-shop-web.herokuapp.com/addUser',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user) 
        }).then(res => res.json)
        .then(data => console.log(data))
    }
    //check user in database
    const isAddUser = (email, addUser) =>{
        fetch(`https://softy-shop-web.herokuapp.com/user/${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.length === 0){
                console.log(data)
                saveUserDB(addUser)
                // console.log(addUser); 
                
        }
    })
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
