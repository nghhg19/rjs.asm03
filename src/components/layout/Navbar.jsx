import { FaCartFlatbed } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import style from "../../static/styles/Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { SIGNOUT } from "../../redux/slice/UserSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleClick = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <div className={`${style.navbar} ${style.flex}`}>
      <span className={style.flex}>
        <p
          className={`${style.home} ${style.pointer}`}
          onClick={() => {
            handleClick("/");
          }}
        >
          Home
        </p>
        <p
          className={`${style.navigate} ${style.pointer}`}
          onClick={() => {
            handleClick("/shop");
          }}
        >
          Shop
        </p>
      </span>

      <p className={style.boutique}> BOUTIQUE</p>

      <span className={`${style.flex} ${style.cartLogin}`}>
        <p
          className={style.pointer}
          onClick={() => {
            handleClick("/cart");
          }}
        >
          <FaCartFlatbed className={style.icon} />
          Cart
        </p>
        {currentUser && currentUser.email ? (
          <>
            <p className={style.pointer}>
              <FaUser className={style.icon} />
              {currentUser.name} <FaCaretDown />
            </p>
            <p
              className={style.pointer}
              onClick={() => {
                dispatch(SIGNOUT());
              }}
            >
              (Logout)
            </p>
          </>
        ) : (
          <p
            className={style.pointer}
            onClick={() => {
              handleClick("/login");
            }}
          >
            <FaUser className={style.icon} />
            Login
          </p>
        )}
      </span>
    </div>
  );
};

export default Navbar;
