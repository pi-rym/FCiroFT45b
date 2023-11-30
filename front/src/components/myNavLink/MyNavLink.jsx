import { NavLink } from "react-router-dom";
import style from "./MyNavLink.module.css";
const MyNavLink = ({ name }) => {
  // Home -> home
  const path = name.toLowerCase().split(" ").join("");
  return (
    <NavLink to={`${path}`} className={style.link}>
      {name}
    </NavLink>
  );
};

export default MyNavLink;
