import React from "react";
import "./assets/css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__opacityFade"></div>
      <div
        className="login__bg"
        style={{
          backgroundImage:
            "url(" + "https://woolgar.dk/assets/images/login-bg.jpg" + ")",
        }}
      ></div>
      <div className="login__content">
        <h2 className="login__content__title">Sign In</h2>
        <small className="login__content__disclaimer">
          "Pay attention: this is not the original Netflix sign in. Don't insert
          your real credentials in this form"
        </small>
        <form className="login__form">
          <div className="login__form_inputWrap">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="login__form__input"
            ></input>
            <label className="login__form__inputLabel">
              Please Enter a valid email address
            </label>
          </div>
          <div className="login__form_inputWrap">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login__form__input"
            ></input>
            <label className="login__form__inputLabel">
              The password should have a lenght between 6 and 30 charaters
            </label>
          </div>
          <button type="submit" className="login__form__button submit__button">
            Sign in
          </button>
        </form>
        <small className="login__content__register">
          Do you not have an account?{" "}
          <span className="login__content__toggle">Sign Up</span>
        </small>
      </div>
    </div>
  );
}

export default Login;
