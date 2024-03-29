import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./components/Button";
import { IconContext } from "react-icons/lib";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link
              smooth
              to='#'
              className='navbar-logo'
              onClick={closeMobileMenu}
            >
              {/* <MdFingerprint className='navbar-icon' /> */}
              VILLA EMILY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={handleClick}>
                  HOME
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link
                  smooth
                  to='#about'
                  className='nav-links'
                  onClick={handleClick}
                >
                  ABOUT
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  smooth
                  to='#facilities'
                  className='nav-links'
                  onClick={handleClick}
                >
                  FACILITIES
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  smooth
                  to='#location'
                  className='nav-links'
                  onClick={handleClick}
                >
                  LOCATION
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  smooth
                  to='#rates'
                  className='nav-links'
                  onClick={handleClick}
                >
                  AVAILABILITY
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  smooth
                  to='#gallery'
                  className='nav-links'
                  onClick={handleClick}
                >
                  GALLERY
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link smooth to='#sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>CONTACT US</Button>
                  </Link>
                ) : (
                  <Link smooth to='#sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                      CONTACT US
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
