import { useEffect, useRef, useState } from "react";
import style from "../../static/styles/detail/DetailProducts.module.scss";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setInputValue,
} from "../../redux/slice/CountSlice";

import { ADD_CART } from "../../redux/slice/CartSlice";

const DetailProducts = ({ products, id }) => {
  const currentUser = useSelector((state) => state.user.currentUser.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state) => state.count.value);
  const [productsDetail, setProductsDetail] = useState();
  const imgMainRef = useRef();

  const handlerAddCart = () => {
    const CartItem = {
      name: currentUser,
      cart: {
        img: productsDetail.img1,
        product: productsDetail.name,
        price: Number(productsDetail.price),
        quantity: count,
        total: Number(productsDetail.price) * count,
      },
    };
    dispatch(ADD_CART(CartItem));
  };

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  useEffect(() => {
    const product = products.find((product) => product._id.$oid === id);
    setProductsDetail(product);
  }, [products, id]);

  const changeMainImg = (e) => {
    const url = e.target.getAttribute("src");
    imgMainRef.current.setAttribute("src", url);
  };

  if (productsDetail) {
    const related = products.filter(
      (item) =>
        item.category === productsDetail.category && item._id.$oid !== id
    );
    return (
      <div className={style.detail}>
        <div className={style.detailProduct}>
          <div className={style.imgsOther}>
            <img
              src={productsDetail.img1}
              alt={productsDetail.name}
              onClick={changeMainImg}
            />
            <img
              src={productsDetail.img2}
              alt={productsDetail.name}
              onClick={changeMainImg}
            />
            <img
              src={productsDetail.img3}
              alt={productsDetail.name}
              onClick={changeMainImg}
            />
            <img
              src={productsDetail.img4}
              alt={productsDetail.name}
              onClick={changeMainImg}
            />
          </div>

          <div className={style.imgMain}>
            <img
              src={productsDetail.img1}
              alt={productsDetail.name}
              ref={imgMainRef}
            />
          </div>

          <div className={style.info}>
            <h1 className={style.info_title}>{productsDetail.name}</h1>
            <p className={style.info_price}>
              {Number(productsDetail.price).toLocaleString("vi-VN")} VND
            </p>
            <p className={style.info_short_desc}>{productsDetail.short_desc}</p>
            <p className={style.info_titleCategory}>
              CATEGORY:
              <span className={style.info_textCategory}>
                {productsDetail.category}
              </span>
            </p>
            <form className={style.formQuantity}>
              <span className={style.label}>QUANTITY</span>
              <span className={style.input}>
                <FaCaretLeft
                  className={style.icon}
                  onClick={() => dispatch(decrement())}
                />
                <input
                  id="QUANTITY"
                  value={count}
                  onChange={handleInputChange}
                  autoFocus
                  min={1}
                  required
                />
                <FaCaretRight
                  className={style.icon}
                  onClick={() => dispatch(increment())}
                />
              </span>

              <button
                type="button"
                className={style.btn}
                onClick={handlerAddCart}
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>

        <div className={style.description}>
          <div className={style.description_label}>Description</div>
          <h3 className={style.description_title}>Product Description</h3>

          {productsDetail.long_desc.split("\n").map((item, index) => (
            <p key={index} className={style.description_long_desc}>
              {item}
              {index !== productsDetail.long_desc.split("\n").length - 1 && (
                <br />
              )}
              {/* Thêm <br/> giữa các dòng, trừ dòng cuối cùng */}
            </p>
          ))}
        </div>

        <div className={style.related}>
          <h3 className={style.related_title}>Related Products</h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            {related.map((item) => {
              return (
                <div key={item._id.$oid} className={style.related_item}>
                  <img
                    loading="lazy"
                    src={item.img1}
                    alt={item.name}
                    className={style.productsImg}
                    onClick={() => {
                      navigate(`/detail/${item._id.$oid}`);
                      window.scrollTo(0, 0);
                    }}
                  />
                  <h4>{item.name}</h4>
                  <p>{Number(item.price).toLocaleString("vi-VN")} VND</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default DetailProducts;
