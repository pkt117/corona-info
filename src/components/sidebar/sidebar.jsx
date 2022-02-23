import React from "react";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.title}>Corona Info</h1>
      <section className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          국내현황
        </NavLink>
        <NavLink
          to="/global"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          세계현황
        </NavLink>
        <NavLink
          to="/vaccination_status"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          접종현황
        </NavLink>
        <NavLink
          to="/guideline_info"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          방역지침
        </NavLink>
      </section>
    </nav>
  );
};

export default Sidebar;
