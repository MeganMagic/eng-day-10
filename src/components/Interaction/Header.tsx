import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../MenuIcon";

const Header: React.FC = () => {
  const { hash } = useLocation();
  const hashRef = useRef(hash);
  const scrolledRef = useRef(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuToggle = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const resetIsOpened = () => {
      if (window.innerWidth >= 1280 && isOpened) setIsOpened(false);
    };
    window.addEventListener("resize", resetIsOpened);
    return () => window.removeEventListener("resize", resetIsOpened);
  }, [isOpened]);

  useEffect(() => {
    if (hash) {
      if (hashRef.current !== hash) {
        hashRef.current = hash;
        scrolledRef.current = false;
      }

      if (!scrolledRef.current) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrolledRef.current = true;
          setIsOpened(false);
        }
      }
    }
  }, [hash]);

  return (
    <HeaderWrapper isOpened={isOpened}>
      <p className="header-logo">
        CODESTATES
        <br />
        ENGINEERING DAY
      </p>

      <HeaderMenuMo>
        <MenuIcon isOpened={isOpened} onClick={handleMenuToggle} />
      </HeaderMenuMo>

      <HeaderMenuMoNav isOpened={isOpened}>
        <div className="nav-item-wrapper">
          {navItems.map((item) => (
            <Link to={`#${item.id}`} key={item.id}>
              <button className="nav-item">{item.label}</button>
            </Link>
          ))}
        </div>
      </HeaderMenuMoNav>

      <HeaderMenu>
        {navItems.map((item) => (
          <Link to={`#${item.id}`} key={item.id}>
            <button className="menu-item">{item.label}</button>
          </Link>
        ))}
      </HeaderMenu>
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

  ${({ theme }) => theme.breakpoint.desktop} {
    height: 80px;
    padding: 0 50px;

    .header-logo {
      font-size: 18px;
      line-height: 18px;
    }
  }
`;

const HeaderMenuMo = styled.div`
  display: block;
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
    display: flex;
  }

  flex-direction: row;
  column-gap: 10px;

  .menu-item {
    padding: 9px 16px 7px 16px;
    border-radius: 5px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.025em;
    color: #aaaaaa;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #222222;
      color: #ffffff;
    }
  }
`;

const navItems = [
  {
    id: "outline",
    label: "행사 소개",
  },
  {
    id: "talk",
    label: "발표 세션",
  },
  {
    id: "eng-test",
    label: "ENG 능력평가",
  },
  {
    id: "timetable",
    label: "행사 시간표",
  },
  {
    id: "networking",
    label: "네트워킹",
  },
  {
    id: "committee",
    label: "준비한 사람들",
  },
];
