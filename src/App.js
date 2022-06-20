import React, { useRef, useState } from 'react';
import './App.css';



import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/analytics';


import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
   apiKey: "AIzaSyB3Mv67__Xp5yLYXYrXgScAklWZqRq0Qd0",
  authDomain: "projet-nodejs-react.firebaseapp.com",
  projectId: "projet-nodejs-react",
  storageBucket: "projet-nodejs-react.appspot.com",
  messagingSenderId: "938701393577",
  appId: "1:938701393577:web:8c9e1481a0eec59ef0a3b8"
})


const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {



  return (
    <div className="container">
      
      <section>

        { <ChatRoom /> }
      </section>

    </div>
  );
}



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(100);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();


    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="maValise" onSubmit={sendMessage}>

      <input className="SizeBarrSend" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Ecriver ce que vous voulez ici, puis cliquer sur le bouton envoyer" />

      <button class="button-29" type="submit" disabled={!formValue}>Envoyer</button>

    </form>
  </>)
}












function ChatMessage(props) {
  const { text } = props.message;


  return (
  <>
  <div>
      <p>{text}</p>
    </div>
  </>
  )
}


export default App;
