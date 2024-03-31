import style from "../../static/styles/home/BrowseCategories.module.scss";
import { useNavigate } from "react-router-dom";
import ImgProduct1 from "../../static/image/product_1.png";
import ImgProduct2 from "../../static/image/product_2.png";
import ImgProduct3 from "../../static/image/product_3.png";
import ImgProduct4 from "../../static/image/product_4.png";
import ImgProduct5 from "../../static/image/product_5.png";
import { startTransition } from "react";

const BrowseCategories = () => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    startTransition(() => {
      navigate(`/shop/?category=${url}`);
    });
  };
  const imgList = [
    { name: ImgProduct1, type: "iphone" },
    { name: ImgProduct2, type: "macbook" },
    { name: ImgProduct3, type: "ipad" },
    { name: ImgProduct4, type: "watch" },
    { name: ImgProduct5, type: "airpod" },
  ];
  return (
    <div className={style.wrapper}>
      <p className={style.subTitle}>Carefully Created Collections</p>
      <h2 className={style.mainTitle}>Browse our categories</h2>
      <div className={style.grid}>
        {imgList.map((item) => {
          return (
            <img
              key={item.name}
              src={item.name}
              alt={`${item.name}`}
              className={style.grid_item}
              onClick={() => handleClick(item.type)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowseCategories;
