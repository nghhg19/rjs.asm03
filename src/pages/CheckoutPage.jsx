import Header from "../components/layout/Header";
import FormInfo from "../components/checkout/FormInfo";
import YourOrder from "../components/checkout/YourOrder";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser.email);
  const carts = useSelector((state) => state.carts.listCarts);
  const currentCart = carts.filter((item) => item.name === currentUser);
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Header />
      <h2
        style={{
          textTransform: "uppercase",
          fontWeight: "500",
          fontStyle: "italic",
          margin: "30px 0px",
          letterSpacing: "0.1rem",
        }}
      >
        Billing Details
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {" "}
        <div style={{ width: "65%" }}>
          <FormInfo />
        </div>
        <div style={{ width: "35%" }}>
          <YourOrder currentCart={currentCart} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
