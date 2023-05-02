import React from 'react'

const Login = () => {
  return (
    <>
  <div className="class">
    <img
      src="img/empty-classroom-due-coronavirus-pandemic (1).jpg"
      width="1350px"
      height="640px"
    />
  </div>
  <div className="page">
    <div className="headingsContainer">
      <h3>
        <br />
        Sign in
      </h3>
      <p>Sign in with your username and password</p>
    </div>
    <form>
      <div className="mainContainer">
        <label htmlFor="username">Your username</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required=""
        />
        <br />
        <label htmlFor="pswrd">Your password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="pswrd"
          required=""
        />
        <div className="subcontainer">
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>
          <p className="forgotpsd">
            {" "}
            <a href="#">Forgot Password?</a>
          </p>
        </div>
        <button type="submit">Login</button>
        {/* <p class="register">Not a member?  <a href="#">Register here!</a></p> */}
      </div>
    </form>
  </div>
</>

  )
}

export default Login