import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import colors from "../colors";

const OuterNav = styled.nav`
  margin-right: 2em;
  transition: right 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: ${({ isNavShown }) => (isNavShown ? "0px" : "-100%")};
    background-color: #dadada;
    z-index: 2;
    margin: 0;
    width: 100%;
    height: 100vh;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0 0.5em;
  margin: 0;

  @media screen and (max-width: 768px) {
    padding: 1.5em;
  }
`;

const NavListItem = styled.li`
  display: inline-block;
  margin: 0 1em;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0.75em 0;
    width: 100%;
    font-size: 26px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontBlack};
  transition: all 0.325s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.fontBlack};
  }
`;

const ToggleNav = styled.span`
  margin-right: 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;

  transition: all 0.325s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.fontBlack};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isNavShown: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({ isNavShown: !prevState.isNavShown }));
  }

  render() {
    const CloseMenu = () => (
      <ToggleNav onClick={this.toggleNav}>Close Menu</ToggleNav>
    );

    const ShowMenu = () => <ToggleNav onClick={this.toggleNav}>Menu</ToggleNav>;

    const NavListItems = ["about", "work", "studio", "news", "contact"].map(
      to => (
        <NavListItem key={to}>
          <NavLink to={`/${to}`} onClick={this.toggleNav}>
            {to}
          </NavLink>
        </NavListItem>
      )
    );

    return (
      <div>
        <OuterNav isNavShown={this.state.isNavShown}>
          <NavList>
            <CloseMenu />
            {NavListItems}
          </NavList>
        </OuterNav>
        <ShowMenu />
      </div>
    );
  }
}

export default Nav;
