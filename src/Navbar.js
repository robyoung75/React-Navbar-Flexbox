import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth < 700);
  const [active, setActive] = useState(true);

  let handleToggle = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    let timerId = null;
    let handleResize = () => {
      clearTimeout(timerId);
      setTimeout(() => {
        setMobile(window.innerWidth < 700);
        setActive(true);
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__logo">
          <h1 style={{color: "#bb86fc"}}>LearnMern</h1>
        </li>
        <li className={active ? "nav__listItem" : "nav__listItem active"}>
          <p>Home</p>
        </li>
        <li className={active ? "nav__listItem" : "nav__listItem active"}>
          <p>About</p>
        </li>
        <li className={active ? "nav__listItem" : "nav__listItem active"}>
          <p>Contact</p>
        </li>
        <li
          className={
            active ? "nav__listItem button" : "nav__listItem button active"
          }
        >
          <p>Sign Up</p>
        </li>
        <li
          className={
            active
              ? "nav__listItem button secondary"
              : "nav__listItem button secondary active"
          }
        >
          <p>Login</p>
        </li>
        <li className="nav__toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
}
