import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <LogoText>
          <WhiteText>STOCK</WhiteText>
          <Space />
          <YellowText>ARCHERY</YellowText>
        </LogoText>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgba(37,37,37,255);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoText = styled.div`
  font-size: 2rem; /* Adjust size as needed */
  font-weight: bold; /* You can choose the desired font weight */
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const WhiteText = styled.span`
  color: #fff; /* White color */
`;

const YellowText = styled.span`
  color: #FDD788; /* Yellow color */
`;
const Space = styled.span`
  margin-left: 0.5rem; /* Adjust the spacing as needed */
`;

export default Header;
