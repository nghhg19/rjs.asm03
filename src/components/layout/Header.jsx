import { useLocation } from "react-router-dom";
import style from "../../static/styles/Header.module.scss";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const parts = pathname.split("/");
  const detail = parts[1];
  return (
    <div className={style.navHeader}>
      <h1 className={style.title}>{detail}</h1>
      <div className={style.breadcrumbs}>{detail}</div>
    </div>
  );
};

export default Header;
