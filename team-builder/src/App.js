import React, {useState} from 'react';
import './App.css';
import DisplayTeam from './components/DisplayTeam';
import Form from "./components/Form";

function App() {

  const [members, setMembers] = useState([
    {name: "rick", email: "unkown", role: "chaos" }
  ])

  return (
    <div className="App">
      <Form/>
      {members.map(member => 
        <DisplayTeam teamMember = {member}/>
      )}
    </div>
  );
}

export default App;
