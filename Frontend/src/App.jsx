
    
import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";
import { useState } from 'react';
import {v1 as uuidv1} from "uuid";
import Login from "./Login";
function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]); //stores all chats of curr threads
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads,
    token,setToken
  }; 
  
   
  return (
    <div className='app'>

      {

        token ?
      
      <MyContext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
        :

        <Login />

      }


    
    </div>
  )
}

export default App;