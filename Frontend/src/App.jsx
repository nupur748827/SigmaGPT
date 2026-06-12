
    
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
  const [prevChats, setPrevChats] = useState([]);
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
    token, setToken
  };

  return (
    <MyContext.Provider value={providerValues}>
      <div className='app'>

        {
          token ?

          <>
            <Sidebar />
            <ChatWindow />
          </>

          :

          <Login />
        }

      </div>
    </MyContext.Provider>
  );
}   // <-- THIS WAS MISSING

export default App;