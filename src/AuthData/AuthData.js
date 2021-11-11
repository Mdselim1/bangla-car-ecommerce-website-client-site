import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut , updateProfile,onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../components/FirebaseAuth/Firebase.initialize';
import axios from 'axios';

initializeAuthentication();

const AuthData = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    const auth = getAuth();

    // Create User System By Email And Password 
    const CreateUserEmailAndPassword = (name, email, password) => {
        setLoader(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                  }).catch((error) => {
                    setError(error.message)
                  });
    // Signed in 
    const user = userCredential.user;
      setUser(user);
      setError('');
  })
  .catch((error) => {
    const errorMessage = error.message;
      setError(errorMessage);
  })
        .finally(() => setLoader(false));
    };

    

    // Log In User System By Email And Password 
    const LogInEmailAndPassword = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            setError('');
          })
          .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage);
          })
        .finally(()=>setLoader(false))
    };


    // On Auth State Change System Require 
    useEffect(() => {
        setLoader(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setLoader(false)
        });
        return ()=> unsubscribed;
    },[])


    // Log Out System 
    const HandleLogOutUser = () => {
        setLoader(true)
        signOut(auth).then(() => {
            
        }).catch((error) => {
            console.log(error.message);
        })
            .finally(() => setLoader(false) )

    };

    // Get Car Data Product From Database  
    useEffect(() => {
        setLoader(true);
        axios.get('http://localhost:8000/cars')
            .then(result => {
                setProducts(result.data);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setLoader(false));
    }, []);

    return {
        LogInEmailAndPassword,
        user, error, setError,products,
        CreateUserEmailAndPassword,HandleLogOutUser,loader
    }

};

export default AuthData;