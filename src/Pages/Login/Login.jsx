import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  return (
    <>
      <div className="container" id="container">
        <div className="overlay-container">
          <form>
            <h1>Sign in</h1>
            <input type="text" placeholder="Username" name="LoginID" />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              maxlength="8"
              className="mt-2"
            />
            <Link className="mt-3" to="/home">
              <button type="submit"> Sign In</button>
            </Link>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              {/* <h1>{{ greetings }}</h1> */}
              <p>Enter appropriate credential details to login</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
