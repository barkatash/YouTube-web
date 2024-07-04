import React, { useState } from "react";
import "./LogInWindow.css";
import img1 from "./youtubeLogo.png";
import { useNavigate } from "react-router-dom";

function LogInWindow({ allUsers, navigateToSignIn, setUserInfo, userInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const onMoveToHomepage = () => {
    navigate("/");
  };

  const handleLogInClick = async (event) => {
      event.preventDefault();
      const data = { username: username, password: password}
      const res = await fetch("http://localhost:8080/api/tokens/", {
        'method': 'post',
        'headers': {
        'Content-Type': 'application/json',
        },
        'body': JSON.stringify(data)
        })

      const json = await res.json()
      if (json.result === "success") {
        const user = allUsers.filter((user) => user.username === username)[0];
        const updatedUserInfo = { ...user, token: json.token };
        alert(`Logged in successfully! Welcome, ${user.displayName}`);
        setUserInfo(updatedUserInfo);
        onMoveToHomepage();
      }
      else {
        alert(json.message);
      }
    }
  
  return (
    <div id="logInWindow">
      <div id="logInWindow_background">
        <div id="logInWindow_part1">
          <img
            className="logInWindow_img"
            src={img1}
            width="150"
            height="150"
            alt="YouTube Logo"
          />
          <div id="logInWindow_logIn">Log In</div>
          <div id="logInWindow_toContinue">to continue to YouTube</div>
        </div>
        <div id="logInWindow_part2">
          <form className="row g-3 login" onSubmit={handleLogInClick}>
            <div className="login">
              <input
                id="logInWindow_textInput"
                type="text"
                className="form-control"
                placeholder="user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                id="logInWindow_textInput2"
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login">
              <button
                type="button"
                id="logInWindow_signInButton"
                className="btn btn-primary"
                onClick={navigateToSignIn}
              >
                Sign In
              </button>
              <button
                type="submit"
                id="logInWindow_logInButton"
                className="btn btn-primary"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInWindow;
