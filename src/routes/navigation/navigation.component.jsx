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
  const handleClick = () => setMenuState(!menuState);
  const location = useLocation();
  console.log(location);
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
              <NavLink to='/'>home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about'>about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/portoflio'>portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contact'>contact</NavLink>
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
