import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebase = () =>{
    initializeApp(firebaseConfig);
}

export default initializeFirebase;

/* 
steps for authentication

-----------------------

step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

---------------------------

Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

--------------------------------

step 3: set auth system 

1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

-----------------------------------

step 4: create auth context hook (useAuth)
1. create a auth context
2. Create a context Provider
3. set context Provider context value


*/