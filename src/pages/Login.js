import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react"; 
import { auth } from"../firebase";
import { useNavigate } from "react-router-dom";
import HomePage from './HomePage.js'
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import Footer from "./Footer.js";

export default function Login() {
    let navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = useCallback(
        (e) => {
            setEmail(e.target.value);
        },
        [setEmail]
    );

    const handlePasswordChange = useCallback(
        (e) => {
            setPassword(e.target.value);
        },
        [setPassword]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential, user);
               alert("Bravo, vous etes connecté. Appuyer sur ok pour être redirigé l'espace room du tchat..")
                window.location.href="https://www.google.fr/"
                
              

                // ...
            })
            .catch((error) => {
                setError(error.message);
                // ..
                
            });
        },
        [email, password,  setError]
    )

    
    return (

    <div>
        <h1>Se connecter</h1>
        

        <img src="https://cdn.dribbble.com/users/1320478/screenshots/18300402/media/69a954caa9f771cbf7671a29f7aaa70e.jpg?compress=1&resize=700x525&vertical=top" className="ImagePoissonDribble" />
        <p></p>
        <form onSubmit={handleSubmit}>
            <label>
                Email: 
                <input type="email" name="email" onChange={handleEmailChange} />
            </label>
            < br/>
            < br/>
            <label>
                Password:
                <input type="password" name="password" onChange={handlePasswordChange} />
            </label>

            {error && <p>{error}</p>}
            < br/>< br/>
            <button  className="button-53" type="submit">Enregister</button>
            < br/>< br/>< br/>
            <p>Ou</p>
        </form>

        <div>< Footer/></div>
    </div>
    )

}