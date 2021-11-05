import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged ,signInWithEmailAndPassword} from "firebase/auth";
 

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
   
     const [user, setUser] = useState({});

     const [isLoading, setIsLoading] = useState(true);

     const [authError, setAuthError] = useState('');

     const auth = getAuth();

      
     const registerUser = (email,password) => {
       setIsLoading(true);
        createUserWithEmailAndPassword(auth,email , password)
        .then((userCredential) => {
          setAuthError('');
          })
          .catch((error) => {
            /* const errorCode = error.code; */
            console.log(error);
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
     }

     const loginUser = (email,password,location,history) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location.state?.form  || '/';
          history.replace(destination);
          setAuthError('');
        })
        .catch((error) => {
          /* const errorCode = error.code; */
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
     }

//     observer user state 
     useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
         
             setUser(user);
          } else {
            setUser({})
          }
          setIsLoading(false);
        });
        return () => unsubscribe;
     },[])

     const logout = () => {
      setIsLoading(true);
         signOut(auth).then(() => {
            //  Sign-out successful
         }).catch((error) => {
        //     an error happened
         })
         .finally(() => setIsLoading(false));
         
     }

     return {
         user,
         isLoading,
         authError,
         registerUser,
         logout,
         loginUser,
     }
}

export default useFirebase;