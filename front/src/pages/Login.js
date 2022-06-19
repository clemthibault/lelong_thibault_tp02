import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react"; 
import { auth } from"../firebase";
import { useNavigate } from "react-router-dom";
import HomePage from './HomePage.js'
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from './Chat.js'
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
                window.location.href="/chat"
                
              

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
        < br/>< br/>
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
            <button type="submit">Enregister</button>
            <p>Ou</p>
        </form>

        <div>< Footer/></div>
    </div>
    )

}