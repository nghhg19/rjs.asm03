import DetailProducts from "../components/detail/DetailProducts";
import { useEffect } from "react";
import { fetchData } from "../redux/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const dispatch = useDispatch();

  const detailProductsData = useSelector((state) => state.products.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (detailProductsData) {
    return <DetailProducts products={detailProductsData} id={id} />;
  }
};

export default DetailPage;
