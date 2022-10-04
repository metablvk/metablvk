import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
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
      <header>
        <NavigationContainer>
          <LogoContainer>
            <NavLink>
              <span>{'< '}</span>
              {brand}
              <span>{' />'}</span>
            </NavLink>
          </LogoContainer>
          <NavMenu menuState={menuState} location={location.pathname}>
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
              <NavLink to='/contact' onClick={handleClick}>
                contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <Kebab onClick={handleClick}>
            <Bar />
            <Bar />
            <Bar />
          </Kebab>
        </NavigationContainer>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
