import * as ROUTE from "@/constants/routes";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";

import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
const SideBar = () => {
  return (
    <div className="Side-menu-main">
      <ul>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            exact
            to={ROUTE.SHOP}>
            <span className="sidebar-titles">Dashboard </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink activeClassName="navigation-menu-active" to={ROUTE.HOME}>
            <span className="sidebar-titles">Books </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.FEATURED_PRODUCTS}>
            <span className="sidebar-titles">Featured </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.RECOMMENDED_PRODUCTS}>
            <span className="sidebar-titles">Recommended </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.RECOMMENDED_PRODUCTS}>
            <span className="sidebar-titles">Plans </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.RECOMMENDED_PRODUCTS}>
            <span className="sidebar-titles">Publisher </span>
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.RECOMMENDED_PRODUCTS}>
            <span className="sidebar-titles">Settings </span>
          </NavLink>
        </li>
        <br />
      </ul>
    </div>
  );
};
export default SideBar;
