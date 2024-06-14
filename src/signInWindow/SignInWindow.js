import React, { useState } from 'react';
import img1 from '../logInWindow/youtubeLogo.png';
import './SignInWindow.css';

function SignInWindow() {
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== verifyPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = { username, password, picture: displayName }; // Assuming display name as picture URL/path for now

        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert('User added successfully!');
            } else {
                alert('Failed to add user.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <div>
            <div id="back">
                <div id="part1">
                    <img src={img1} alt="YouTube Logo" />
                    <div id="logIn">
                        sign in
                    </div>
                    <div id="toContinue">
                        to continue to You Tube
                    </div>
                </div>
                <div id="part2">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div id='part2_1'>
                            <div className="col-md-4 allPart2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-4 allPart2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="display name"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div id="part2_1">
                            <div className="col-md-4 allPart2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <small id="passwordHelpBlock" className="form-text text-muted downText">
                                    Your password must be 8-20 characters long.
                                </small>
                            </div>
                            <div className="col-md-4 allPart2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="verify code"
                                    value={verifyPassword}
                                    onChange={(e) => setVerifyPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <button id="signInButton" className="btn btn-primary" type="submit">sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInWindow;
