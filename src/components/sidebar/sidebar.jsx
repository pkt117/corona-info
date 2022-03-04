import React from "react";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clickToggleButton } from "../../redux";

const Sidebar = ({ toggle, clickToggleButton }) => {
  return (
    <nav
      className={toggle ? `${styles.sidebar} ${styles.onBar}` : styles.sidebar}
    >
      <h1 className={styles.title}>Corona Info</h1>
      <section className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          onClick={clickToggleButton}
        >
          국내현황
        </NavLink>
        <NavLink
          to="/overseas_status"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          onClick={clickToggleButton}
        >
          해외현황
        </NavLink>
        <NavLink
          to="/vaccination_status"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          onClick={clickToggleButton}
        >
          접종현황
        </NavLink>
        <NavLink
          to="/guideline_info"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          onClick={clickToggleButton}
        >
          방역지침
        </NavLink>
      </section>
    </nav>
  );
};

const mapStateToProps = ({ sidebarToggleReducer: state }) => {
  return {
    toggle: state.toggle,
  };
};

const mapDispatchToProps = {
  clickToggleButton,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
