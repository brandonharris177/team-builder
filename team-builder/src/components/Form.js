import React, {useState} from "react";

const Form = (props) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const handleChange = e => {
        setMember({...member, [event.target.name]: event.target.value})
    }
    return (
        <form>
            <input 
            name = "name"
            value = {member.name}
            onChange={e => {
                setMember({...member, name: event.target.value})
            }}/>
            <input 
            name = "email"/>
            <input 
            name = "role"/>
        </form>
    );
};

export default Form
