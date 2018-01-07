import React, { Component } from "react";
import styled from "styled-components";

import colors from "../colors";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const SCROLL_BREAKPOINT = 150;

    if (window.document.documentElement.scrollTop > SCROLL_BREAKPOINT) {
      this.setState({ isScrolled: true });
    } else if (this.state.isScrolled) {
      this.setState({ isScrolled: false });
    }
  }

  render() {
    console.log(this.state);
    return (
      <HeaderWrapper isScrolled={this.state.isScrolled}>
        <HeaderTitle>Shift.</HeaderTitle>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  position: sticky;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? colors.yellow1 : "white"};
  padding: 1.5em 0 0.5em 0.5em;
  top: 0;
  transition: all 0.325s ease-in-out;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 0.3em;
  letter-spacing: 2.5px;
  font-weight: 400;
`;

export default Header;
