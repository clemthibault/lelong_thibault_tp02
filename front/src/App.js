import logo from './logo.svg';
import './css/Footer.css';
import LoginApp from './pages/LoginApp.js';
import RegisterApp from './pages/RegisterApp.js'
import './css/Allpage.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage.js'
import Chat from './pages/Chat.js';

function App() {

  return (

    <div>

      <Router>

        <nav>
          <Link to="/">Page d'accueil</Link>
          <Link to="/seconnecter">Se connecter</Link>
          <Link to="/s'inscrire">S'inscrire'</Link>
        </nav>




        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/seconnecter" element={<LoginApp />}/>
        <Route path="/s'inscrire" element={<RegisterApp />}/>
        <Route path='/chat' element={<Chat />}/>

        <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
     
    


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

export default App;

