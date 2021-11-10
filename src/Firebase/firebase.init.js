import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializeAuthentiCation = () =>{

    initializeApp(firebaseConfig);
}

export default initializeAuthentiCation;