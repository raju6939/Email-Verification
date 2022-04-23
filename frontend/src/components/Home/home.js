import React from 'react'
var email = sessionStorage.getItem('email');
function Home(){
    return (
        <div style={{textAlign:"center"}}>
            <u><span style={{color: "red",fontSize: "x-large"}}>{email}</span></u> 
            <span> Verified Successfully</span>
        </div>
    );
}

export default Home;