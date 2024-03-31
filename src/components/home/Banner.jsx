import style from "../../static/styles/home/Banner.module.scss";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={style.banner}>
      <div className={style.banner_infor}>
        <p className={style.banner_text_sub}>New Inspiration 2024</p>
        <h1 className={style.banner_text_main}>20% Off On New Sesson</h1>
        <p
          onClick={() => {
            navigate("/shop");
          }}
          className={style.banner_btn}
        >
          Browse Collections
        </p>
      </div>
    </div>
  );
};

export default Banner;
