// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../static/styles/login/LoginForm.module.scss";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../redux/slice/UserSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let currentEmail, currentPassword;

  return (
    <div className={style.Register}>
      <form action="" className={style.RegisterForm}>
        <h1>Sign In</h1>

        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            currentEmail = e.target.value;
          }}
        />
        <input
          type="text"
          placeholder="Password"
          className={style.input_lastchild}
          onChange={(e) => {
            currentPassword = e.target.value;
          }}
        />

        <button
          type="button"
          onClick={() => {
            dispatch(
              SIGNIN({ email: currentEmail, password: currentPassword })
            );
            navigate("/");
          }}
        >
          Sign In
        </button>
        <p>
          Create Account?
          <Link to="/register" className={style.link}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
