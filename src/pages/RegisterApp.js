import logo from '../logo.svg';
import Login from './Login.js'
import Register from './Register';
import { useNavigate } from "react-router-dom";



function RegisterApp() {
    let navigate = useNavigate();
    return (
  
      <div>
  
        < Register />
        <button onClick={() => {navigate("/seconnecter")}}>Après s'être enregistré, maintenant cliquer sur ce boutton pour se connecter avec les identifiants et mot de passes que vous venez de créer</button>
      
  
      </div>
  
      
  
      /*
  
      <footer className="backgroundFooter">
        <div className="centrer">
          <div>
            <a>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aaffb538-d8c8-4d7a-b71a-3a2be68c64c3/fluent_emoji-surprise-24-regular.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220606T085420Z&X-Amz-Expires=86400&X-Amz-Signature=cded39d71cd96bcb13f25c40509fcf21dc2aefabac6a1e6281f28386ad590fb8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fluent_emoji-surprise-24-regular.png%22&x-id=GetObject" />
            </a>
          </div>
  
          <div>
            <a>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/677e4a5a-401c-488c-8121-4a685ef0a8b5/bi_chat-square-dots.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220606T085423Z&X-Amz-Expires=86400&X-Amz-Signature=7cb281f35dd0883fec0a3761879a4f88ad595c2bcc970b3b1ff3102dd27884c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bi_chat-square-dots.png%22&x-id=GetObject" />
            </a>
          </div>
  
          <div>
          <a>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aaffb538-d8c8-4d7a-b71a-3a2be68c64c3/fluent_emoji-surprise-24-regular.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220606T085420Z&X-Amz-Expires=86400&X-Amz-Signature=cded39d71cd96bcb13f25c40509fcf21dc2aefabac6a1e6281f28386ad590fb8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fluent_emoji-surprise-24-regular.png%22&x-id=GetObject" />
            </a>
          </div>
        </div>
      
      </footer>
      */
    )
      
  }
  
  export default RegisterApp;
  
  