import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  NavigationHeader,
  NavigationContainer,
  LogoContainer,
  NavMenu,
  NavLink,
  NavItem,
  Kebab,
  Bar,
} from './navigation.styles';

const Navigation = ({ brand }) => {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    /*
      If the windows inner width is less then 800px allow changing of menu state to trigger the collapsable nav.
    */
    if (window.innerWidth < 800) {
      setMenuState(!menuState);
    }
  };
  const location = useLocation();

  return (
    <>
      <NavigationHeader>
        <NavigationContainer>
          <LogoContainer>
            <NavLink to='/'>
              <span>{'< '}</span>
              {brand}
              <span>{' />'}</span>
            </NavLink>
          </LogoContainer>
          <NavMenu menuState={menuState} location={location.pathname}>
            {/* <NavItem>
              <NavLink onClick={handleClick}>exit</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink to='/' onClick={handleClick}>
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about' onClick={handleClick}>
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/works' onClick={handleClick}>
                works
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink to='/contact' onClick={handleClick}>
                contact
              </NavLink> */}
              <a
                href='mailto:metablvk@gmail.com?subject=Get%20in%20touch'
                onClick={handleClick}
              >
                contact
              </a>
            </NavItem>
          </NavMenu>
          <Kebab onClick={handleClick}>
            <Bar />
            <Bar />
            <Bar />
          </Kebab>
        </NavigationContainer>
      </NavigationHeader>
      <Outlet />
    </>
  );
};

export default Navigation;
