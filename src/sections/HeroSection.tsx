import React from "react";
import styled from "styled-components";
import Interaction from "../components/Interaction/Interaction";
import { ReactComponent as Chevron } from "../assets/chevron-down.svg";

const HeroSection: React.FC = () => {
  return (
    <FirstSectionWrapper>
      <InteractionBox>
        <Interaction />
      </InteractionBox>

      <TextBox>
        <p className="text-title">
          CODESTATES
          <br />
          ENGINEERING DAY
        </p>
        <p className="text-title-kr">제 10회 코드스테이츠 엔지니어링데이</p>
        <p className="text-info">
          2022.12.26 (화) 13:00 - 18:00
          <br />
          코드스테이츠 마곡캠퍼스
        </p>
      </TextBox>

      <Icon>
        <Chevron width={18} height={10} />
      </Icon>
    </FirstSectionWrapper>
  );
};

export default HeroSection;

const FirstSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 615px;

  ${({ theme }) => theme.breakpoint.tablet} {
    height: 720px;
  }
  ${({ theme }) => theme.breakpoint.desktop} {
    height: 800px;
  }
  ${({ theme }) => theme.breakpoint.wide} {
    height: 840px;
  }
`;

const InteractionBox = styled.div`
  position: relative;
  top: 0;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .text-title {
    margin-bottom: 12px;

    font-family: orbitron, sans-serif;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.02em;
    font-weight: 900;
  }

  .text-title-kr {
    margin-bottom: 40px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.04em;
    font-weight: 900;
    text-shadow: #000000 10px 0 30px;
  }

  .text-info {
    color: #cccccc;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    height: 24px;
    font-weight: 500;
    letter-spacing: -0.04em;
    text-shadow: #000000 10px 0 30px;
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    .text-title {
      font-size: 48px;
      line-height: 48px;
    }
    .text-title-kr {
      font-size: 20px;
      line-height: 20px;
    }
  }

  ${({ theme }) => theme.breakpoint.desktop} {
    .text-title {
      margin-bottom: 16px;
      font-size: 64px;
      line-height: 64px;
    }

    .text-title-kr {
      margin-bottom: 60px;
      font-size: 24px;
      line-height: 24px;
    }

    .text-info {
      font-size: 18px;
      height: 27px;
    }
  }
`;

const Icon = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;

  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoint.tablet} {
    bottom: 30px;
  }

  ${({ theme }) => theme.breakpoint.desktop} {
    bottom: 40px;
  }

  ${({ theme }) => theme.breakpoint.wide} {
    bottom: 60px;
  }
`;
