import React from 'react'
import axios from 'axios'
import "./form.css";
function Form() {
    
      return (
          <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            <div id ="container">

                        <form onSubmit={optRequest}>
                        <div id="name">
                            <span>Name: </span> 
                            <input type = "text"  name = "name" placeholder = "Enter Your name" />
                        </div>
                        <div id ="email">
                            <span>Email: </span> 
                            <input type = "text"  name = "email" placeholder = "Enter Your email" />
                        </div>
                        <div id = "password">
                            <span>Password: </span> 
                            <input type = "password"  name = "password" placeholder = "Enter Your password" />
                        </div>
                        <input type = "submit" className = "btn btn-primary" value="Verify email using OTP"/>
                        </form>
                    </div>
        </div>
      );
    }

async function optRequest(event){
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    await axios.post('http://localhost:1234/send',{email}).then(res=>{
        sessionStorage.setItem('otp',res.data);
        sessionStorage.setItem('email',email);
        sessionStorage.setItem('name',name);
        sessionStorage.setItem('password',password);
    })
    window.open("/otp","_self");
}
export default Form;
