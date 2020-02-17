import React, {useState} from 'react';

import OtherUser from './components/OtherUser';
import MessagesList from './components/MessagesList';
import InputBoard from './components/InputBoard';
import mockChat from './mock/mockChat.json';
import './App.css';

function App() {
  const [messages, setMessages] = useState(mockChat);
  const [userStatusClass, setUserStatusClass] = useState('status-inactive');
  const [newMessages, setNewMessages] = useState(mockChat.reduce((sum, msg) => {
    return sum += (msg.status === 'received') ? 1 : 0;
  }, 0));

  return (
    <div className="App">
      <div className="me">
        <span className={userStatusClass}></span>
        Me Iam ({newMessages} new messages)
      </div>
      <OtherUser />
      <MessagesList messages={messages} />
      <InputBoard />
    </div>
  );
}

export default App;
