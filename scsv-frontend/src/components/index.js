import { Button } from '@blueprintjs/core';
import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'

export default function Index() {
    
    function removeJWToken(){
        localStorage.removeItem("scsvJWT")
    }
    
    // if (!localStorage.getItem('scsvJWT')){
    //     return (<Navigate to='/'  />)
    // }
    return (
        <>
        <div className="indexHead">
            <h1 className="indexTitle">Welcome to stateCSV Index</h1>
        </div>
        <Button
            text="Logout"
            onClick={removeJWToken}
        />
        </>
        )
    

    
}