import React from "react";
import styled from "styled-components";
import map from "../assets/outline-section-map.png";
import contentItemEmoji1 from "../assets/emoji-clap.png";
import contentItemEmoji2 from "../assets/emoji-write.png";
import contentItemEmoji3 from "../assets/emoji-handshake.png";
import { useWindowSize } from "../utils/hooks/useWindowSize";

const CONTENTS_DATA = [
  {
    emoji: contentItemEmoji1,
    altText: "박수치는 이모지",
    title: <>발표 세션</>,
    descriptionTablet: (
      <>
        ENG 크루들의 고민, 경험,
        <br />
        인사이트를 만나보세요
      </>
    ),
    descriptionMobile: <>ENG 크루들의 고민, 경험, 인사이트를 만나보세요</>,
  },
  {
    emoji: contentItemEmoji2,
    altText: "글쓰는 이모지",
    title: <>ENG 능력평가</>,
    descriptionTablet: (
      <>
        당신은 ENG팀과 크루들에
        <br /> 대해 얼마나 알고 있나요?
      </>
    ),
    descriptionMobile: <>당신은 ENG팀과 크루들에 대해 얼마나 알고 있나요?</>,
  },
  {
    emoji: contentItemEmoji3,
    altText: "손하트 이모지",
    title: <>네트워킹</>,
    descriptionTablet: (
      <>
        ENG 크루들과
        <br />
        자유롭게 이야기 나눠요
      </>
    ),
    descriptionMobile: <>당신은 ENG팀과 크루들에 대해 얼마나 알고 있나요?</>,
  },
];

const OutlineSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 0;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .section-title {
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.04em;
    margin-bottom: 40px;

    strong {
      color: #6c56f5;
    }
  }

  .description-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;

    .section-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.025em;

      strong {
        font-weight: 700;
      }
    }
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 120px 0;

    .section-title {
      font-size: 48px;
      line-height: 64px;
      margin-bottom: 80px;
    }

    .description-box {
      gap: 36px;
      margin-bottom: 80px;

      .section-description {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
`;

const LocationCard = styled.div`
  width: 315px;
  margin-bottom: 80px;

  .map-img-container {
    height: 240px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
    }
  }

  .map-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 0 32px;
    background: #191919;
    border-radius: 0 0 20px 20px;

    .location-name {
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.025em;
    }

    .location-detail {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.025em;
    }
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    width: 360px;

    .map-text {
      gap: 8px;
      padding: 32px 0 40px;

      .location-name {
        font-size: 18px;
      }
    }
  }
`;

const EngDayContents = styled.div`
  .section-subtitle {
    font-weight: 900;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.025em;
    margin-bottom: 20px;
  }

  .contents-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .contents-list-item {
      width: 315px;
      padding: 20px 0;
      background: #191919;
      border-radius: 20px;

      img {
        width: 48px;
        margin-bottom: 6px;
      }

      > h4 {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.025em;
        margin-bottom: 4px;
      }

      > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
        letter-spacing: -0.025em;
      }
    }
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    .section-subtitle {
      font-size: 28px;
      line-height: 42px;
      margin-bottom: 32px;
    }

    .contents-list {
      flex-direction: row;
      gap: 32px;

      .contents-list-item {
        width: 200px;
        padding: 26px 0 27px;

        img {
          margin-bottom: 15px;
        }

        > h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }

        > p {
          font-size: 14px;
        }
      }
    }
  }
`;

const OutlineSection: React.FC = () => {
  const { width } = useWindowSize();
  const isTablet = width ? width > 767 : false;

  return (
    <OutlineSectionWrapper id="outline">
      <h2 className="section-title">
        <strong>10번째</strong> 엔지니어링 데이,
        <br />
        오프라인으로 만나요 👋
      </h2>
      <div className="description-box">
        <p className="section-description">
          <strong>엔지니어링 데이</strong>는 ENG팀 크루들이 함께 모여
          <br />
          각자의 고민과 경험, 인사이트를 공유는 자리입니다.
        </p>
        <p className="section-description">
          2022년 2월 25일에 처음 시작한 엔지니어링 데이가
          <br />
          벌써 <strong>10회</strong>를 맞이하였습니다.
        </p>
        <p className="section-description">
          발표와 더불어 ENG 크루들과 만나
          <br />
          자유롭게 이야기를 나누는 자리를 만들고자
          <br />
          10번째 엔지니어링 데이는 <strong>오프라인</strong>으로 진행됩니다.
        </p>
        <p className="section-description">
          <strong>12월 27일, 마곡캠퍼스에서 만나요!</strong> 🙇🏻
        </p>
      </div>
      <LocationCard>
        <div className="map-img-container">
          <img src={map} alt="코드스테이츠 마곡캠퍼스 약도" />
        </div>
        <div className="map-text">
          <p className="location-name">코드스테이츠 마곡캠퍼스</p>
          <p className="location-detail">
            서울 강서구 공항대로 236 쿠쿠마곡빌딩 11층
            <br />/ 5호선 발산역 8번출구 도보 5분
          </p>
        </div>
      </LocationCard>
      <EngDayContents>
        <h3 className="section-subtitle">
          10번째 엔지니어링 데이에는
          <br />
          무엇이 준비되어 있나요?
        </h3>
        <ul className="contents-list">
          {CONTENTS_DATA.map((content) => (
            <li className="contents-list-item">
              <img src={content.emoji} alt={content.altText} />
              <h4>{content.title}</h4>
              <p>
                {isTablet
                  ? content.descriptionTablet
                  : content.descriptionMobile}
              </p>
            </li>
          ))}
        </ul>
      </EngDayContents>
    </OutlineSectionWrapper>
  );
};

export default OutlineSection;
