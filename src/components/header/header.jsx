import React from "react";
import styles from "./header.module.css";
import { connect } from "react-redux";
import { clickToggleButton } from "../../redux";

const Header = ({ toggle, clickToggleButton }) => {
  return (
    <header className={styles.header}>
      <span
        className={toggle ? `${styles.toggle} ${styles.active}` : styles.toggle}
        onClick={clickToggleButton}
      ></span>

      <h1 className={styles.title}>corona info</h1>
    </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
