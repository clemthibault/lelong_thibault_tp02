import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react"; 
import { auth } from"../firebase";
import Footer from "./Footer";


export default function Register() {
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
            createUserWithEmailAndPassword(auth, email, password)
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
        <h1>Créer son compte</h1>
        <img src="https://cdn.dribbble.com/userupload/2812120/file/original-7333c9ecbee0bba03f84e35eac1d2ffc.png?compress=1&resize=700x525&vertical=top" className="ImagePoissonDribble" />
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
            <button type="submit" className="button-53">Enregister</button>
            < br/><br />
            <p>Ou</p>
        </form>
        <div><Footer /></div>
    </div>
    )

}