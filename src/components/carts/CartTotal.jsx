import React from "react";
import style from "../../static/styles/carts/CartTotal.module.scss";
import { FaGift } from "react-icons/fa";

const CartTotal = ({ currentCart }) => {
  // Tính tổng các giá trị của thuộc tính "total" của các đối tượng trong mảng currentCart
  const total = currentCart.reduce((acc, item) => acc + item.cart.total, 0);

  return (
    <>
      <div className={style.cartTotal}>
        <h3 className={style.title}>Cart Total</h3>
        <div
          className={style.section}
          style={{
            borderBottom: "1px solid var(--textSubColor)",
          }}
        >
          <p className={style.section_title}>Subtotal</p>
          <p className={style.priceSub}>
            {Number(total).toLocaleString("vi-VN")} VND
          </p>
        </div>
        <div
          className={style.section}
          style={{
            marginBottom: "1rem",
          }}
        >
          <p className={style.section_title}>Total</p>
          <p className={style.priceTotal}>
            {Number(total).toLocaleString("vi-VN")} VND
          </p>
        </div>
        <form>
          <input
            type="text"
            name="coupon"
            className="form-control"
            placeholder="Enter your coupon"
          />
          <button className={style.btnApply}>
            <FaGift />
            Apply coupon
          </button>
        </form>
      </div>
    </>
  );
};

export default React.memo(CartTotal);
