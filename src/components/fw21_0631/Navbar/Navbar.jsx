import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCart2, BsChevronDown, BsSearch } from "react-icons/bs";
import { Cartdropdown } from "../cartdropdown/Cartdropdown";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";
import { Nava } from "../Nava/Nava";
import { SmSearch } from "../scInputSearch/SmSearch";
import { ProfileDropdown } from "../profileDropdown/ProfileDropdown";
import { getLocalData } from "../../../utils/accesslocalstore";
import { useSelector } from "react-redux";

export const Navbar = () => {
  let val = getLocalData("bookData");

  let data = val == null ? [] : [{ ...val }];
  const [cart, setcart] = useState(data);
  const [auth, setauth] = useState(false);
  const [Category, setcategory] = useState(false);
  const navigate = useNavigate();

  const getdata =
    getLocalData("userdata") != null ? getLocalData("userdata") : {};
  const [userData, setuserData] = useState(getdata);

  const [name, setname] = useState(userData.Firstname || "");

  const isAuth = useSelector((store) => store.registerReducer.isAuth);

  const handleCategory = () => {
    setcategory((prev) => !prev);
  };

  const redirect = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.navbar}>
      <header className={styles.navbarWrapper}>
        <div className={styles.nav1wrapper}>
          <div className={styles.nav1}>
            <ul className={styles.navList1}>
              <li style={{ zIndex: "9" }}>
                Hi!
                {isAuth ? (
                  name && (
                    <>
                      <h5>
                        {name} <BsChevronDown />
                      </h5>

                      <div className={styles.profileDropdown}>
                        <ProfileDropdown {...userData} />
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <Link className={styles.signin_loginLink} to="/login">
                      Sign in
                    </Link>
                    <span>or</span>
                    <Link className={styles.signin_loginLink} to={"/register"}>
                      register
                    </Link>
                  </>
                )}
              </li>
              <li>
                <a
                  className={`${styles.navListWithLinks}  ${styles.navScreenNone} `}
                  href="#"
                >
                  Daily Deals
                </a>
              </li>
              <li>
                <a
                  className={`${styles.navListWithLinks}   ${styles.navScreenNone}`}
                  href="#"
                >
                  Help & Contact
                </a>
              </li>
            </ul>
            <ul className={styles.navList2}>
              <li>
                <a className={styles.navListWithLinks} href="#">
                  Sell
                </a>
              </li>
              <li className={styles.navListWithoutLink}>
                Watchlist
                <BsChevronDown className={styles.NavDownicon} />
                <div className={styles.navMyEbayDropdown1}>
                  <p>Looks like you are not watching any items yet. </p>
                </div>
              </li>
              <li className={styles.navListWithoutLink}>
                My Ebay <BsChevronDown className={styles.NavDownicon} />
                <ul className={styles.navMyEbayDropdown}>
                  <li>Summary</li>
                  <li>Recently Viewed</li>
                  <li>Birds/offer</li>
                  <li>Watchlist</li>
                  <li>Purchase History</li>
                  <li>Buy Again</li>
                  <li>Selling</li>
                </ul>
              </li>
              <li className={styles.navIcons} style={{ zIndex: 8 }}>
                <IoNotificationsOutline />

                <div
                  className={styles.notificationDropdown}
                  style={{ background: "#fff" }}
                >
                  <p>There are no new notifications.</p>
                </div>
              </li>
              <li className={styles.navIcons}>
                <BsCart2 />
                {cart.length > 0 && (
                  <div className={styles.cartBadges}>{cart.length}</div>
                )}
                <div className={styles.Cartdropdownicon}>
                  <Cartdropdown onClick={redirect} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* ------ nav2 ------- */}
        <div className={styles.nav2}>
          <div className={styles.nav2Logo}>
            <Link to="/">
              <img src="https://i.imgur.com/FQCppUc.png" alt="" />
            </Link>
          </div>

          <div className={styles.nav2ShopDropdown} onClick={handleCategory}>
            Category <BsChevronDown className={styles.CategoryIcons} />
            {Category && <CategoryDropdown />}
          </div>

          <div className={styles.nav2DropdownSearch}>
            <input type="text" placeholder="Search for anyting" />
            <select>
              <option>Category</option>
            </select>
          </div>

          <button className={styles.navMediumScreenIcon}>
            {" "}
            <BsSearch />{" "}
          </button>

          <button className={styles.nav2DropdownSearchBtn}>Search</button>
          <div className={styles.nav2Ad}>Advanced</div>
        </div>

        <div className={styles.Namea}>
          <Nava />
        </div>

        <div className={styles.smallSearchCon}>
          <SmSearch />
        </div>
      </header>
    </div>
  );
};
