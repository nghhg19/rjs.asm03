import React from "react";
import style from "../../static/styles/checkout/YourOrder.module.scss";

const YourOrder = ({ currentCart }) => {
  // Tính tổng các giá trị của thuộc tính "total" của các đối tượng trong mảng currentCart
  const total = currentCart.reduce((acc, item) => acc + item.cart.total, 0);
  console.log(currentCart);
  return (
    <>
      <div className={style.yourOrder}>
        <h3 className={style.title}>Your Order</h3>
        <div>
          {currentCart.map((item) => {
            return (
              <div className={style.section} key={item.cart.product}>
                <p className={style.textName}>{item.cart.product}</p>
                <p className={style.textPrice}>
                  {Number(item.cart.price).toLocaleString("vi-VN")} VND x
                  {item.cart.quantity}
                </p>
              </div>
            );
          })}
        </div>
        <div className={style.total}>
          <p className={style.textTotal}>Total</p>
          <p className={style.priceTotal}>
            {total.toLocaleString("vi-VN")} VND
          </p>
        </div>
      </div>
    </>
  );
};

export default YourOrder;
