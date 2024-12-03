import styles from "./Header.module.css";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className={styles.header}>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        duration={700}
        offset={-70}
        className={styles.home}
      >
        Home
      </ScrollLink>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <ScrollLink
              to="why"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              why?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="what"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              what?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="how"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              how?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="demo"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              Demo
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
