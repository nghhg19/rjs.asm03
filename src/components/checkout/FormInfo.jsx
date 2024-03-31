import React from "react";
import style from "../../static/styles/checkout/FormInfo.module.scss";
const FormInfo = () => {
  return (
    <>
      <form className={style.form}>
        <div className={style.inputGroup}>
          <label className={style.lable}>Full Name:</label>
          <input
            id="fullname"
            type="text"
            className={style.input}
            name="fullname"
            placeholder="Enter Your Full Name Here!"
          />
        </div>
        <div className={style.inputGroup}>
          <label className={style.lable}>Email:</label>
          <input
            id="email"
            type="email"
            className={style.input}
            name="email"
            placeholder="Enter Your Email Here!"
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="phone" className={style.lable}>
            Phone:
          </label>
          <input
            id="phone"
            type="text"
            className={style.input}
            name="phone"
            placeholder="Enter Your Phone Here!"
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="address" className={style.lable}>
            Address:
          </label>
          <input
            id="address"
            type="text"
            className={style.input}
            name="address"
            placeholder="Enter Your Address Here!"
          />
        </div>
        <button className={style.btnSubmit}>Place order</button>
      </form>
    </>
  );
};

export default FormInfo;
