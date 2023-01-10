import React from "react";
import styled from "styled-components";

const MenuIcon: React.FC<{ isOpened: boolean; onClick: () => void }> = ({
  isOpened,
  onClick,
}) => (
  <MenuIconWrapper className={isOpened ? "opened" : "closed"} onClick={onClick}>
    <div className="menu-icon__row row-1"></div>
    <div className="menu-icon__row row-2"></div>
    <div className="menu-icon__row row-3"></div>
    <div className="menu-icon__row row-4"></div>
  </MenuIconWrapper>
);

export default MenuIcon;

const MenuIconWrapper = styled.button`
  width: 24px;
  height: 24px;
  margin: 0;
  background-color: unset;
  position: relative;
  cursor: pointer;

  .menu-icon__row {
    width: 18px;
    height: 2px;
    border-radius: 1px;
    background-color: #ffffff;
    position: absolute;

    transition: all 0.5s ease;
  }
  .row-1 {
    top: 6px;
    left: 3px;
    opacity: 1;
  }
  .row-2 {
    top: 12px;
    left: 3px;
  }
  .row-4 {
    top: 12px;
    left: 3px;
    opacity: 0;
  }
  .row-3 {
    top: 18px;
    left: 3px;
    opacity: 1;
  }

  &.opened {
    .row-1,
    .row-3 {
      opacity: 0;
    }

    .row-2 {
      transform: rotate(45deg);
    }
    .row-4 {
      opacity: 1;
      transform: rotate(-45deg);
    }
  }
`;
