import logo from '../logo.svg';
import Login from './Login.js'
import Register from './Register';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';



function RegisterApp() {
    let navigate = useNavigate();
    return (
  
      <div>
  
      page d'accueil
        <button onClick={() => {navigate("/seconnecter")}}>Se connecter</button>
      
      <div>< Footer /></div>
      </div>
  
    )
      
  }
  
  export default RegisterApp;
  
  