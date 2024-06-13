import React, { useState } from 'react';
import './LogInWindow.css';
import img1 from './youtubeLogo.png';
import SignInWindow from '../signInWindow/SignInWindow.js';

function LogInWindow() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInButtonClick = () => {
        setShowSignIn(true);
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
        <div>
            {showSignIn ? (
                <SignInWindow />
            ) : (
                <div id="back">
                    <div id="part1">
                        <img src={img1} width="150" height="150" alt="YouTube Logo" />
                        <div id="logIn">log in</div>
                        <div id="toContinue">to continue to YouTube</div>
                    </div>
                    <div id="part2">
                        <form className="row g-3" onSubmit={handleLogIn}>
                            <div id="part2_1">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="user name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div id="buttons">
                                <div>
                                    <button type="button" id="signInButton" className="btn btn-primary" onClick={handleSignInButtonClick}>
                                        sign in
                                    </button>
                                </div>
                                <div className="col-md-4">
                                    <button id="signInButton" className="btn btn-primary" type="submit">
                                        log in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogInWindow;
