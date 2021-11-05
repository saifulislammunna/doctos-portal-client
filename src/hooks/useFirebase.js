import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
 

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
   
     const [user, setUser] = useState({});

     const auth = getAuth();

      
     const registerUser = (email,password) => {
        createUserWithEmailAndPassword(auth,email , password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
     }
//     observer user state 
     useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
         
             setUser(user);
          } else {
            setUser({})
          }
        });
        return () => unsubscribe;
     },[])

     const logout = () => {
         signOut(auth).then(() => {
            //  Sign-out successful
         }).catch((error) => {
        //     an error happened
         });
         
     }

     return {
         user,
         registerUser,
         logout,
     }
}

export default useFirebase;