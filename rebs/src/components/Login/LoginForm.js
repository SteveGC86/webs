import React from 'react';
import './LoginForm.css';



export default function LoginForm({handleLoginSubmit}) {
    return (
        <div className="login">
        <img src={require('./redhill.png')} className="logo" alt={"Redhill Education Logo"}/>
        <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.target.elements
            const email = form.email.value

            if(email === '' ) {
                alert('Please enter your email address')
                return;
            }
            
            handleLoginSubmit(email)
          }}>
            <p>
              <input type="email" name="email" placeholder="Email Address"/>
            </p>
            <p>
              <button type="submit">Login</button>
            </p>
          </form>
        </div>
    );
  }
