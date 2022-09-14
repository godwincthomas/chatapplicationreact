import React, { useState } from "react";
import {  Link } from "react-router-dom";
const Register = () => {  
    const [err] = useState(false);
    const handleSubmit = async (e) => {
    }
    return (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
              <input required type="text" placeholder="display name" />
              <input required type="email" placeholder="email" />
              <input required type="password" placeholder="password" />
              <input required style={{ display: "none" }} type="file" id="file" />
              <label htmlFor="file">
               
                <span>Add an avatar</span>
              </label>
              <button >Sign up</button>
            
              {err && <span>Something went wrong</span>}
            </form>
            <p>
              You do have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      );
}

export default Register;