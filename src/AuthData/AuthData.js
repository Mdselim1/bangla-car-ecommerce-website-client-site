import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut , updateProfile,onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../components/FirebaseAuth/Firebase.initialize';

initializeAuthentication();

const AuthData = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);

    const auth = getAuth();

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

    useEffect(() => {
        setLoader(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('')
            }
            setLoader(false)
        });
        return unsubscribed;
    },[])

    const HandleLogOutUser = () => {
        setLoader(true)
        signOut(auth).then(() => {
            
        }).catch((error) => {
            console.log(error.message);
        })
            .finally(() => setLoader(false) )

    };

    console.log(user);

    return {
        LogInEmailAndPassword,
        user, error, setError,
        CreateUserEmailAndPassword,HandleLogOutUser,loader
    }

};

export default AuthData;