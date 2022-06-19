import React from "react";
import '../css/Tchat.css';

function Chat() {
    return (
     

        <div className="container">
            <div className="header"></div>
            <h1>Tchat en morse</h1>
            <div className="corps"></div>

            <p className="message">Bonjour</p>

            <p className="message user_message">Salut</p>

            
            <div className="piedDePage">
                <form className="positionButtonSend">
                    <input className="SizeBarrSend" type='text' name="" />
                    <button class="button-29" role="button">Envoyer</button>
                </form>
            </div>
        </div>

    )
}

export default Chat;