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
        <form></form>
        <small className="login__content__register">
          Do you not have an account?{" "}
          <span className="login__content__toggle">Sign Up</span>
        </small>
      </div>
    </div>
  );
}

export default Login;
