import { Suspense, useCallback } from "react";
import style from "../../static/styles/home/ProductTrending.module.scss";
import { useDispatch } from "react-redux";
import Popup from "./Popup";
import { PopupActions } from "../../redux/slice/PopupSlice";

const ProductsTrending = ({ dataProducts }) => {
  const dispatch = useDispatch();

  const handleShowPopup = useCallback(
    (id) => {
      const product = dataProducts.find((product) => product._id.$oid === id);
      dispatch(PopupActions.SHOW_POPUP({ product: product }));
    },
    [dataProducts, dispatch]
  );

  return (
    <>
      <div className={style.productsTrending}>
        <div>
          <p className={style.subTitle}>Made the hard way</p>
          <h2 className={style.mainTitle}>Top trending products</h2>
        </div>
        <div className={style.grid}>
          {dataProducts.map((item) => {
            return (
              <span key={item._id.$oid}>
                <img
                  loading="lazy"
                  src={item.img1}
                  alt={item.name}
                  className={style.productsImg}
                  onClick={() => {
                    handleShowPopup(item._id.$oid);
                  }}
                />
                <h4>{item.name}</h4>
                <p>{Number(item.price).toLocaleString("vi-VN")} VND</p>
              </span>
            );
          })}
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Popup />
      </Suspense>
    </>
  );
};

export default ProductsTrending;
