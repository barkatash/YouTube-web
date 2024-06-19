import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LogInWindow.css';
import img1 from './youtubeLogo.png';
import SignInWindow from '../signInWindow/SignInWindow.js';

function LogInWindow() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin');
    };

    const handleLogIn = async (event) => {
        event.preventDefault();

        const user = { username, password };

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert('Logged in successfully!');
            } else {
                alert('Login failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <body id="logInWindow">
            {showSignIn ? (
                <SignInWindow />
            ) : (
                <div id="logInWindow_background">
                    <div id="logInWindow_part1">
                        <img id="#logInWindow_youTubeLogo" src={img1} width="150" height="150" alt="YouTube Logo" />
                        <div id="logInWindow_logIn">log in</div>
                        <div id="logInWindow_toContinue">to continue to YouTube</div>
                    </div>
                    <div id="logInWindow_part2">
                        <form className="row g-3" onSubmit={handleLogIn}>
                            <div>
                                <div>
                                    <input
                                        id= "logInWindow_textInput"
                                        type="text"
                                        className="form-control"
                                        placeholder="user name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        id= "logInWindow_textInput"
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                type="button"
                                id="logInWindow_signInButton"
                                className="btn btn-primary"
                                onClick={handleSignInClick}>
                                    sign in
                                </button>
                                <button
                                type="submit"
                                id="logInWindow_logInButton"
                                className="btn btn-primary">
                                    log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </body>
    );
}

export default LogInWindow;
