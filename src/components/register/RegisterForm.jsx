import { Link } from "react-router-dom";
import style from "../../static/styles/register/Register.module.scss";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../../redux/slice/UserSlice";
import { useState } from "react";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [newName, SetNewName] = useState();
  const [newEmail, SetNewEmail] = useState();
  const [newPassword, SetNewPassword] = useState();
  const [newPhone, SetNewPhone] = useState();

  const handleCLick = () => {
    const newUser = {
      name: newName,
      email: newEmail,
      password: newPassword,
      phone: newPhone,
    };
    dispatch(SIGNUP(newUser));
  };

  return (
    <div className={style.Register}>
      <form action="" className={style.RegisterForm}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            SetNewName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            SetNewEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            SetNewPassword(e.target.value);
          }}
        />
        {/* <input
          type="text"
          placeholder="Re-enter Password"
          onChange={(e) => {
            SetNewName(e.target.value);
          }}
        /> */}
        <input
          type="text"
          placeholder="Phone"
          className={style.input_lastchild}
          onChange={(e) => {
            SetNewPhone(e.target.value);
          }}
        />

        <button type="button" onClick={handleCLick}>
          Sign Up
        </button>
        <p>
          Login?
          <Link to="/login" className={style.link}>
            Click Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
