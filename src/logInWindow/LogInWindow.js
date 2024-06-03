import './LogInWindow.css';
import img1 from './youtubeLogo.png';
import '../signInWindow/SignInWindow.js';
import SignInWindow from '../signInWindow/SignInWindow.js';


function LogInWindow() {
    const handleSignInButtonClick = () => {
        // Open another JavaScript file when the button is clicked
        //window.open('../signInWindow/SignInWindow.js', '_self');

        return (
            <div className="App">
                <div>
                <SignInWindow />
                 </div>
            </div>
        );
    };
    return (
        <body>
            <div id="back">
                <div id="part1">
                    <img src={img1} width="150" height="150"></img>
                    <div id="logIn">
                        log in
                    </div>
                    <div id="toContinue">
                        to continue to You Tube
                    </div>
                </div>
                <div id="part2">
                    <form class="row g-3">
                        <div id="part2_1">
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="textInputUN" placeholder="user name" required/>
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="textInputP" placeholder="code" required/>
                            </div>
                        </div>
                        <div id="buttons">
                            <div>
                                <button type="button" id="signInButton" class="btn btn-primary" onClick={handleSignInButtonClick}>sign in</button>
                            </div>
                            <div class="col-md-4">
                                <button id="signInButton" class="btn btn-primary" type="submit">log in</button>
                            </div>
                        </div>            
                    </form>
                </div>
            </div>
        </body>
    );
}

export default LogInWindow;