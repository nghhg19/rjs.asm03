import React from "react";
import classes from "../../static/styles/carts/CartTable.module.scss";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const CartTable = () => {
  return (
    <>
      <div className={classes.actions}>
        <Link to={"/shop"} className={classes.linkContinue}>
          <FaLongArrowAltLeft /> Continue shopping
        </Link>
        <Link to={"/checkout"} className={classes.linkCheckout}>
          Proceed to checkout <FaLongArrowAltRight />
        </Link>
      </div>
    </>
  );
};

export default CartTable;
