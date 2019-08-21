import React from "react";

const DisplayTeam = (props) => {

    const teamMemeber = props.teamMember

    return (
        <>
        <h1>{teamMemeber.name}</h1>
        <h2>{teamMemeber.email}</h2>
        <h2>{teamMemeber.role}</h2>
        </>
    )
} 

export default DisplayTeam;