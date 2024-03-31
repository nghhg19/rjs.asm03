import { useEffect, useState } from "react";
import style from "../../static/styles/shop/ProductList.module.scss";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, paramCategory }) => {
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    if (paramCategory === "all") {
      setProductsList(products);
    } else {
      const product = products.filter(
        (product) => product.category === paramCategory
      );
      setProductsList(product);
    }
  }, [products, paramCategory]);

  const navigate = useNavigate();

  if (productsList) {
    return (
      <span className={style.grid} style={{ flexBasis: "75%" }}>
        {productsList.map((item) => {
          return (
            <span key={item._id.$oid}>
              <img
                loading="lazy"
                src={item.img1}
                alt={item.name}
                className={style.productsImg}
                onClick={() => {
                  navigate(`/detail/${item._id.$oid}`);
                }}
              />
              <h4>{item.name}</h4>
              <p>{Number(item.price).toLocaleString("vi-VN")} VND</p>
            </span>
          );
        })}
      </span>
    );
  }
};

export default ProductList;
