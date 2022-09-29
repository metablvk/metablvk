import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navigation = ({ brand }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <NavLink>{brand}</NavLink>
          </div>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
