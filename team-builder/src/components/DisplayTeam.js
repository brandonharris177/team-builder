import React from "react";

const DisplayTeam = (propsFromTheReturnStatementInApp) => { //the props here could be replaced by the word 

    const teamMemeber = propsFromTheReturnStatementInApp.passAsteamMember //same with the props here

    return (
        <>
        <h1>{teamMemeber.name}</h1>
        <h2>{teamMemeber.email}</h2>
        <h2>{teamMemeber.role}</h2>
        </>
    )
} 

//the teamMember.$anything assigns the values that are given from the data. If we were importing information or geting it from axios these would have to match from there but since we are creating these values in form they match what is created in Form.js

export default DisplayTeam;