import React, { useState, useEffect } from 'react'; //useEffect is a hook
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false); //set state
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);//sets the click of menu button changes from bars to cross
  const closeMobileMenu = () => setClick(false); //menu for mobile
//function to display button according to screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
// use effect hook to make signup button visible from one time and not again and again
  useEffect(() => {
    showButton();
  }, []); //empty array[]

  window.addEventListener('resize', showButton); //calling showbutton func as per requirement on resizing of window

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'> {/*onClick={closeMobileMenu} */}
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/*to dissappear nav menu after clicking*/} 
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} {/* to make the customised button if button and buttonstyle both are true*/}
        </div> 
      </nav>
    </>
  );
}

export default Navbar;