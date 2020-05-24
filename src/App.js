import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MembersContainer from '../src/MembersContainer/MembersContainer'

function App() {
  const [members, setMembers] = useState([])

  async function getGaudete(){
    const gaudete = await axios.get("https://murmuring-thicket-61986.herokuapp.com/members/")
    setMembers(gaudete.data)
  }


  useEffect(()=>{
    getGaudete()
  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <MembersContainer gaudete={members}></MembersContainer>
      </header>
    </div>
  );
}

export default App;
