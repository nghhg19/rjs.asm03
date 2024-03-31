import { useDispatch, useSelector } from "react-redux";
import { PopupActions } from "../../redux/slice/PopupSlice";
import style from "../../static/styles/home/Popup.module.scss";
import { IoCart } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showPopup, product } = useSelector((state) => state.popup);

  const handleClose = () => {
    dispatch(PopupActions.HIDE_POPUP());
  };

  return (
    showPopup && (
      <div className={style.overlay}>
        <div className={style.popup}>
          <div className={style.flex}>
            <span className={style.img}>
              <img src={product.img1} alt="img product" />
            </span>

            <span className={style.info}>
              <h3>{product.name}</h3>
              <p className={style.price}>
                {Number(product.price).toLocaleString("vi-VN")} VND
              </p>
              <p className={style.desc}>{product.short_desc}</p>
              <button
                className={style.btn}
                onClick={() => {
                  navigate(`/detail/${product._id.$oid}`);
                  handleClose();
                }}
              >
                <IoCart style={{ fontSize: "1.5rem" }} />
                View Detail
              </button>
            </span>
          </div>
          <button className={style.btn_close} onClick={handleClose}>
            <IoMdClose style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
