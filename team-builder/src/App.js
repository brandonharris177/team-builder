import React, {useState} from 'react';
import './App.css';
import DisplayTeam from './components/DisplayTeam';
import Form from "./components/Form";

function App() {

  const [members, setMembers] = useState([{//this should contain the correct characters for what you will be passing in [Array], {object}, "String" when you are tesing you can place key: value pairs here to see if it will show up.
    name: "rick", email: "unknown@gmail.com", role: "anything"
  }])

  return (
    <div className="App">
      {members.map(individual => //you may name this (individual) anything you like as long as it machtes what you are passing to DisplayTeam
        <DisplayTeam passAsteamMember = {individual}/>
      )}
      <Form passSetMembersToForm ={setMembers} passMembersToForm = {members}/> 
    </div>
  );
}

export default App;
//in the Form section of the app I am declaring the values that will be passed as props