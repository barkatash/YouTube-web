import img1 from '../logInWindow/youtubeLogo.png';
import './SignInWindow.css';

function SignInWindow() {
    return (
        <body>
            <div id="back">
                <div id="part1">
                    <img src={img1} width="150" height="150"></img>
                    <div id="logIn">
                        sign in
                    </div>
                    <div id="toContinue">
                        to continue to You Tube
                    </div>
                </div>
                <div id="part2">
                    <form class="row g-3">
                        <div id='part2_1'>
                            <div class="col-md-4 allPart2">
                                <input type="text" class="form-control" id="validationDefault03" placeholder="user name" required/>
                            </div>
                            <div class="col-md-4 allPart2">
                                <input type="text" class="form-control" id="validationDefault03" placeholder="display name" required/>
                            </div>
                        </div>
                        <div id="part2_1">
                            <div class="col-md-4 allPart2">
                                <input type="text" class="form-control" id="validationDefault03" placeholder="code" required/>
                                <small id="passwordHelpBlock" class="form-text text-muted downText">
                                    Your password must be 8-20 characters long.
                                </small>
                            </div>
                            <div class="col-md-4 allPart2">
                                <input type="text" class="form-control" id="validationDefault03" placeholder="verify code" required/>
                            </div>
                        </div>
                        <div class="col-12">
                            <button id="signInButton" class="btn btn-primary" type="submit">sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default SignInWindow;