import { NavLink, useSearchParams } from "react-router-dom";
import style from "../../static/styles/shop/SideBar.module.scss";

const SideBar = () => {
  const paramCategory = useSearchParams()[0].get("category") || "all";

  return (
    <span style={{ flexBasis: "25%" }}>
      <h3 className={style.title}>Caterogries</h3>
      <div className={style.labelBlack}>Apple</div>
      <NavLink
        to={"/shop"}
        className={({ isActive }) =>
          isActive && paramCategory === "all"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        All
      </NavLink>
      <div className={style.label}>Iphone & Mac</div>
      <NavLink
        to={"/shop/?category=iphone"}
        className={({ isActive }) =>
          isActive && paramCategory === "iphone"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Iphone
      </NavLink>
      <NavLink
        to={"/shop/?category=ipad"}
        className={({ isActive }) =>
          isActive && paramCategory === "ipad"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Ipad
      </NavLink>
      <NavLink
        to={"/shop/?category=macbook"}
        className={({ isActive }) =>
          isActive && paramCategory === "macbook"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Macbook
      </NavLink>
      <div className={style.label}>Wireless</div>
      <NavLink
        to={"/shop/?category=airpod"}
        className={({ isActive }) =>
          isActive && paramCategory === "airpod"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Airpod
      </NavLink>
      <NavLink
        to={"/shop/?category=watch"}
        className={({ isActive }) =>
          isActive && paramCategory === "watch"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Watch
      </NavLink>
      <div className={style.label}>Other</div>
      <NavLink
        to={"/shop/?category=mouse"}
        className={({ isActive }) =>
          isActive && paramCategory === "mouse"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Mouse
      </NavLink>
      <NavLink
        to={"/shop/?category=keyboard"}
        className={({ isActive }) =>
          isActive && paramCategory === "keyboard"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Keyboard
      </NavLink>
      <NavLink
        to={"/shop/?category=other"}
        className={({ isActive }) =>
          isActive && paramCategory === "other"
            ? `${style.link} ${style.active}`
            : `${style.link}`
        }
        end
      >
        Other
      </NavLink>
    </span>
  );
};

export default SideBar;
