import { useDispatch } from "react-redux";
import style from "../../static/styles/carts/ListCarts.module.scss";
import { FaTrashCan } from "react-icons/fa6";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { UPDATE_CART, DELETE_CART } from "../../redux/slice/CartSlice";

const ListCarts = ({ currentCart }) => {
  const dispatch = useDispatch();

  const addUppdateCart = (item) => {
    const getProduct = item.cart.product;
    const findToUpdate = currentCart.find(
      (product) => product.cart.product === getProduct
    );

    if (findToUpdate) {
      let updatedCart = findToUpdate; // Tạo bản sao của mảng currentCart

      updatedCart = {
        // Thay đổi đối tượng tại chỉ mục indexToUpdate
        ...updatedCart,
        cart: {
          ...updatedCart.cart,
          quantity: updatedCart.cart.quantity + 1,
          total: updatedCart.cart.total + updatedCart.cart.price,
        },
      };

      dispatch(UPDATE_CART(updatedCart)); // Cập nhật giỏ hàng
    }
  };

  const minusUppdateCart = (item) => {
    const getProduct = item.cart.product;
    const findToUpdate = currentCart.find(
      (product) => product.cart.product === getProduct
    );

    if (findToUpdate) {
      let updatedCart = findToUpdate; // Tạo bản sao của mảng currentCart
      if (updatedCart.cart.quantity > 1) {
        updatedCart = {
          // Thay đổi đối tượng tại chỉ mục indexToUpdate
          ...updatedCart,
          cart: {
            ...updatedCart.cart,
            quantity: updatedCart.cart.quantity - 1,
            total: updatedCart.cart.total - updatedCart.cart.price,
          },
        };
      }

      dispatch(UPDATE_CART(updatedCart)); // Cập nhật giỏ hàng
    }
  };

  const delleteCart = (item) => {
    console.log(item);
    const getProduct = item.cart.product;
    dispatch(DELETE_CART(getProduct));
  };
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {currentCart.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.cart.img}
                    alt="img"
                    style={{ width: "100%" }}
                  />
                </td>
                <td>{item.cart.product}</td>
                <td>{Number(item.cart.price).toLocaleString("vi-VN")} VND</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <FaCaretLeft
                      className={style.icon}
                      onClick={() => minusUppdateCart(item)}
                    />
                    <p style={{ margin: "0.5rem" }}>{item.cart.quantity}</p>

                    <FaCaretRight
                      className={style.icon}
                      onClick={() => addUppdateCart(item)}
                    />
                  </div>
                </td>
                <td>{Number(item.cart.total).toLocaleString("vi-VN")} VND</td>
                <td>
                  <button onClick={() => delleteCart(item)}>
                    <FaTrashCan className={style.trash} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ListCarts;
