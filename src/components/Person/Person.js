import React from 'react'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import './Person.css';

function Person() {
    return (
        <div className="person">
            <h6 style={{ 'color': "white",'position':"absolute",'top':"10px" }}>Welcome {window.firstName} {window.lastName}</h6>
            <AccountBoxRoundedIcon fontSize="large" style={{ 'color': "white"}}/>

        </div>
    )
}

export default Person