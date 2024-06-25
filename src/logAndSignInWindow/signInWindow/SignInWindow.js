import img1 from "../logInWindow/youtubeLogo.png";
import "./SignInWindow.css";

function SignInWindow({ setAllUsers, navigateToLogIn, setUserInfo, userInfo }) {
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({
          ...userInfo,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, verifyPassword } = userInfo;

    if (password.length < 8 || password.length > 20) {
      alert("your password must be 8-20 characters long.");
      return;
    }

    if (password !== verifyPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    setAllUsers((prevUsers) => [...prevUsers, userInfo]);
    alert("signed up successfully!");
    navigateToLogIn();
  };

  const { username, displayName, password, verifyPassword, image } = userInfo;
  return (
    <div id="signInWindow">
      <div id="signInWindow_background">
        <div id="signInWindow_part1">
          <img
            className="signInWindow_img"
            src={img1}
            width="150"
            height="150"
            alt="YouTube Logo"
          />
          <div id="signInWindow_signIn">sign in</div>
          <div id="signInWindow_toContinue">to continue to YouTube</div>
        </div>
        <div id="signInWindow_part2">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div id="signInWindow_textInputRow">
              <div className="col-md-4 signInWindow_textInputs">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="user name"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 signInWindow_textInputs">
                <input
                  type="text"
                  className="form-control"
                  name="displayName"
                  placeholder="display name"
                  value={displayName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div id="signInWindow_textInputRow">
              <div className="col-md-4 signInWindow_textInputs">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <small
                  id="passwordHelpBlock"
                  className="form-text text-muted signInWindow_passwordRestriction"
                >
                  Your password must be 8-20 characters long.
                </small>
              </div>
              <div className="col-md-4 signInWindow_textInputs">
                <input
                  type="password"
                  className="form-control"
                  name="verifyPassword"
                  placeholder="verify password"
                  value={verifyPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 col-md-4">
              <input
                type="file"
                name="image"
                id="formFile"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="formFile"
                id="signInWindow_uploadPhotoText"
                className="form-label"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    className="bi bi-upload upload"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                  </svg>
                  <br></br><br></br>
                  Choose your profile image
                </div>
              </label>
            </div>
            <div className="col-12">
              <button
                id="signInWindow_signInButton"
                className="btn btn-primary"
                type="submit"
              >
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInWindow;
