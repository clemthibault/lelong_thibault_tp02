import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react"; 
import { auth } from"../firebase";


export default function Login() {
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
    </div>
    )

}