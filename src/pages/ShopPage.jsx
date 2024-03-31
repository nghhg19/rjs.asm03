import { useEffect } from "react";
import Header from "../components/layout/Header";
import SideBar from "../components/shop/SideBar";
import ProductList from "../components/shop/ProductList ";
import { fetchData } from "../redux/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ShopPage = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.products.data);
  const paramCategory = useSearchParams()[0].get("category") || "all";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (productsData && paramCategory) {
    return (
      <div>
        <Header />
        <span style={{ display: "flex", gap: "1rem" }}>
          <SideBar paramCategory={paramCategory} />
          <ProductList products={productsData} paramCategory={paramCategory} />
        </span>
      </div>
    );
  }
};

export default ShopPage;
