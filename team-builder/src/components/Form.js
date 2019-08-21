import React, {useState} from "react";

const Form = (props) => {
    const setMembers = props.passSetMembersToForm; //here I have redeclared  the parts of the props for understanding but I am free to name them whatever I want
    const members = props.passMembersToForm;
    const [member, setMember] = useState({ //this is new to create new members and are the values that are accounted for in the DisplayTeam.js
        name: "",
        email: "",
        role: ""
    });
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value})
        //...member gives us the orignal state of member whaever it last was {...$anything} (in this case {...member}) then we add whatever the value is (event.target.value) to whatever the changed feild it (event.target.name)
    }
    const submitForm = event => {
        event.preventDefault();
        console.log(member);
        setMembers([...members, member]); //this takes whatever the current state of members is (...member) and adds a new member
        setMember({name: "", email: "", role: ""});
        //this is an optional peice of code that will reset the input boxes
    }
    return (
        <form onSubmit = {submitForm}>
            <label htmlfor = "name">Name:</label>
            <input 
                name = "name"
                placeholder = "name"
                value = {member.name} //this value is updated by the changeHandler
                onChange= {changeHandler}/>
            <label htmlfor = "email">email:</label>
            <input 
                name = "email"
                placeholder = "email"
                type = "email"
                value  = {member.email} //this value is updated by the changeHandler
                onChange = {changeHandler}/>
            <label htmlfor = "role">role:</label>
            <input 
                name = "role"
                placeholder = "role"
                value = {member.role} //this value is updated by the changeHandler
                onChange = {changeHandler}/>
            <button type="submmit">Submit</button>
        </form>
    );
};

export default Form
