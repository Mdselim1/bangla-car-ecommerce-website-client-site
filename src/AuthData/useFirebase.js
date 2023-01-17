import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../components/FirebaseAuth/Firebase.initialize";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // Create User System By Email And Password
  const registerUser = (name, email, password2, history) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password2)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // SaveUserTo database
        SaveUserToDb(email, name);
        // send name to firebases
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoader(false));
  };

  // Log In User System By Email And Password
  const LogInEmailAndPassword = (email, password, history, location) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoader(false));
  };

  // On Auth State Change System Require
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoader(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Log Out System
  const HandleLogOutUser = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoader(false));
  };

  // Get Car Data Product From Database
  useEffect(() => {
    setLoader(true);
    axios
      .get("https://bangla-car-server.up.railway.app/cars")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoader(false));
  }, []);

  // Save User To DataBase
  const SaveUserToDb = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://bangla-car-server.up.railway.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    axios
      .get(`https://bangla-car-server.up.railway.app/users/${user.email}`)
      .then((data) => {
        setAdmin(data.data.admin);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user.email]);

  return {
    LogInEmailAndPassword,
    setProducts,
    admin,
    user,
    error,
    setError,
    products,
    setLoader,
    registerUser,
    HandleLogOutUser,
    loader,
  };
};

export default useFirebase;
