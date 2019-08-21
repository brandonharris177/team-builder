import React from "react";

const DisplayTeam = (propsFromTheReturnStatementInApp) => { //the props here could be replaced by anything you want. 

    const teamMemeber = propsFromTheReturnStatementInApp.passAsTeamMember //same with the props here as long as they match. I have reanamed it teamMember to remember what it is.

    return (
        <>
        <h1>{teamMemeber.name}</h1>
        <h2>{teamMemeber.email}</h2>
        <h2>{teamMemeber.role}</h2>
        </>
    )
} 

//the teamMember.$anything assigns the values that are given from the data. If we were importing information or geting it from axios these would have to match the keys on the information we recived. However, since we are creating these values in From.js they match what is created in Form.js

export default DisplayTeam;