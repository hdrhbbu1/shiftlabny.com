import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import colors from "../colors";

const OuterNav = styled.nav`
  margin-right: 2em;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontBlack};
  transition: all 0.325s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.fontBlack};
  }
`;

const NavListItem = styled.li`
  display: inline-block;
  margin: 0 1em;
  text-transform: uppercase;
  font-weight: bold;
`;

const Nav = () => (
  <OuterNav>
    <NavList>
      <NavListItem>
        <NavLink to="/about">About</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/work">Work</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/studio">Studio</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/news">News</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/contact">Contact</NavLink>
      </NavListItem>
    </NavList>
  </OuterNav>
);

export default Nav;
