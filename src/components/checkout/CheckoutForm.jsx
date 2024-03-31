import React from "react";
import classes from "../../static/styles/checkout/CheckoutForm.module.scss";

const CheckoutForm = () => {
  return (
    <>
      <h3 className={classes.title}>Billing Details</h3>
      <div className="row mb-5">
        <div className="col-md-8"></div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default CheckoutForm;
