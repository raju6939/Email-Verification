import React from 'react'
import axios from 'axios';
import './otp.css';
function Otp(){
      return (
          <div className='container'>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
              <form onSubmit={verifyOtp}>
              <input type ="number" placeholder='Enter OTP' name = 'otp'/><br></br><br></br>
              <button className= "btn btn-primary">Verify OTP</button>
              </form>
          </div>
      );
    }
function verifyOtp(event){
    event.preventDefault();
    let enteredOtp = event.target.otp.value;
    let OTP = sessionStorage.getItem('otp');
    if(enteredOtp === OTP)
        saveData();
    else
        alert('Incorrect OTP');
}
async function saveData(){
    sessionStorage.removeItem('otp');
    let email = sessionStorage.getItem('email');
    let name = sessionStorage.getItem('name');
    let password = sessionStorage.getItem('password');
    let object = {name, email, password}
    await axios.post('http://localhost:1234/save',object).then(res =>{
        if(res.data !== "Yes"){
            alert("Couln;t add");
            window.open("/","_self");
        }
    });
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('name')
    window.open('/home','_self');
}
export default Otp;