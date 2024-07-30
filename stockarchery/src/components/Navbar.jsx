import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className="menuIcon">
        <div className="mobile-navbar-btn">
          {openMenu ? (
            <CgCloseR
              className="mobile-nav-icon close-icon"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <CgMenu
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
          )}
        </div>
        <ul className={`navbar-list ${openMenu ? 'active' : ''}`}>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(37,37,37,255);
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }

  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 2rem;
          text-transform: uppercase;
          color: #FDD788;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color:  #e9e12b;
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4rem; /* Reduced size from 6rem to 4rem */
      cursor: pointer;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001; /* Ensure the close icon is above other elements */
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      color: #FDD788;
    }

    .navbar-list {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    .navbar-list.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
      z-index: 9999;
      background-color:#252525;
      font-size:5rem;
    }

    .menuIcon {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`;

export default Navbar;
