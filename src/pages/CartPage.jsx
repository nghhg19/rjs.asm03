import ListCarts from "../components/carts/ListCart";
import Header from "../components/layout/Header";
import CartTable from "../components/carts/CartTable";
import CartTotal from "../components/carts/CartTotal";
import { useSelector } from "react-redux";

const CartPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser.email);
  const carts = useSelector((state) => state.carts.listCarts);
  const currentCart = carts.filter((item) => item.name === currentUser);
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Header />
      <h2
        style={{
          fontWeight: "500",
          textTransform: "uppercase",
          fontStyle: "italic",
          letterSpacing: "0.1rem",
          marginBottom: "1rem",
        }}
      >
        Shoping Cart
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ width: "75%" }}>
          <ListCarts currentCart={currentCart} />
          <CartTable />
        </div>
        <div style={{ width: "35%" }}>
          <CartTotal currentCart={currentCart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
