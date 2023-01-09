import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import MenuIcon from "../MenuIcon";

const Header: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onMobileMenuClicked = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const resetIsOpened = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280 && isOpened) setIsOpened(false);
    };
    window.addEventListener("resize", resetIsOpened);

    return () => resetIsOpened();
  }, [isOpened]);

  return (
    <HeaderWrapper isOpened={isOpened}>
      <p className="header-logo">
        CODESTATES
        <br />
        ENGINEERING DAY
      </p>

      <HeaderMenuMo>
        <MenuIcon isOpened={isOpened} onClick={onMobileMenuClicked} />
      </HeaderMenuMo>

      <HeaderMenuMoNav isOpened={isOpened}>
        <div className="nav-item-wrapper">
          <p className="nav-item">행사 소개</p>
          <p className="nav-item">발표 세션</p>
          <p className="nav-item">ENG 능력평가</p>
          <p className="nav-item">네트워킹</p>
          <p className="nav-item">행사 시간표</p>
          <p className="nav-item">준비한 사람들</p>
        </div>
      </HeaderMenuMoNav>

      <HeaderMenu></HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isOpened: boolean }>`
  width: 100vw;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #333333;
  position: sticky;
  top: 0;
  z-index: 9;

  ${({ isOpened }) =>
    isOpened
      ? css`
          background-color: #000000;
          backdrop-filter: blur(0px);
        `
      : css`
          background-color: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(10px);
        `}
  transition: backdrop-filter 3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-logo {
    font-family: Orbitron, sans-serif;
    font-size: 14px;
    line-height: 14px;
  }
`;

const HeaderMenuMo = styled.button`
  background-color: unset;
  ${({ theme }) => theme.breakpoint.desktop} {
    display: none;
  }
`;

const HeaderMenuMoNav = styled.nav<{ isOpened: boolean }>`
  width: 100vw;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 9;
  background-color: #000000;

  ${({ isOpened }) =>
    isOpened
      ? css`
          height: 288px;
          border-bottom: 1px solid #333333;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.75);
          overflow: hidden;
        `
      : css`
          height: 0;
          max-height: calc(100vh - 60px);
          overflow: scroll;
        `}
  transition: height 0.3s ease, box-shadow 0.3s ease;

  .nav-item-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  .nav-item {
    width: fit-content;
    color: #ffffff;
    padding: 7px 28px 5px 28px;
    border-radius: 5px;

    font-size: 14px;
    line-height: 21px;
    font-weight: 500;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #222222;
    }
  }
`;

const HeaderMenu = styled.nav`
  display: none;
  ${({ theme }) => theme.breakpoint.desktop} {
    display: block;
  }
`;
