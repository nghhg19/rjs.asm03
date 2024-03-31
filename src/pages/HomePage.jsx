import { useEffect } from "react";
import Banner from "../components/home/Banner";
import BrowseCategories from "../components/home/BrowseCategories";
import ProductsTrending from "../components/home/ProductsTrending";
import OtherInfor from "../components/home/OtherInfor";
import { fetchData } from "../redux/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <BrowseCategories />
      {productsData ? (
        <ProductsTrending dataProducts={productsData} />
      ) : (
        <p>Loading...</p>
      )}
      <OtherInfor />
    </>
  );
};

export default HomePage;
