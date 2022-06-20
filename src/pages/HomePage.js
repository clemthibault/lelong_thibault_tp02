import logo from '../logo.svg';
import Login from './Login.js'
import Register from './Register';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { useEffect, useReducer, useState } from 'react';






function init(initialvalue) {
  return {est: initialvalue}
}

function reducer(state, action ) {
  switch(action.type) {
    case 'increment':
      return state + 'pour utiliser useReducer ';
    case 'decrement':
      return state - 'Bonjour X'
    default:
      throw new Error("Bizarre je ne sais pas ce que sait, dit le useReducer");

  }
}



function RegisterApp() {
    let navigate = useNavigate();

    useEffect(() => {
      document.title = window.location.href
    }, [])

    function essais(){
      return <button className='button-30' onClick={() => {navigate("/seconnecter")}}>Se connecter</button>
    } 
        

    const [phareStart, dispatcher] = useReducer(reducer, " surpise ", init)



    return (
     

      <div>
      <h1>page d'accueil</h1>
        <p></p>
    
      {essais()}

      <img className='ImagePoissonDribble' src="https://cdn.dribbble.com/users/1670818/screenshots/6619747/vc-01.jpg?compress=1&resize=700x525&vertical=top" />

      <p>Ou</p>

     
      <div>
        UseReducer dit : {JSON.stringify(phareStart)}
        <p></p>
        <button className="button-53" onClick={() => dispatcher({type: 'increment'})}>Voir et revoir autant de fois qu'on veut</button>
        <button className="button-53" onClick={() => dispatcher({type: 'decrement'})}>Supprimer Ce que vous avez vu</button>
      </div>
      
      <div>< Footer /></div>
      </div>
  
    )
      
  }
  
  export default RegisterApp;
  
  