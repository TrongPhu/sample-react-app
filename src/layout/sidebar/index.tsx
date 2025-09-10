import { NavLink } from "react-router-dom";
import styles from "../styles.module.scss";

const SideBar = () => {
  return (
    <>
      <div className="w-1/8">
        <div
          className={`${styles.homePage} border border-solid border-black h-full p-2`}
        >
          <div className={styles.link}>
            <NavLink to="/post">See post data</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="/currency-convert">Currency conversion</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="/stopwatch">Stopwatch</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="/custom-style-page">Custom style page</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
