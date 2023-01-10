import styled from "styled-components";
import WriteEmoji from "../assets/emoji-write.png";
import MonkeyEmoji from "../assets/emoji-monkey.png";
import TrumpetEmoji from "../assets/emoji-trumpet.png";
import TestImageMobile from "../assets/test-section-main-mobile.png";
import TestImageTablet from "../assets/test-section-main-tablet.png";
import { useWindowSize } from "../utils/hooks/useWindowSize";

const TimetableSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 0;

  .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    .emoji-box {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background: #191919;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 40px;
      }
    }

    > h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.04em;
      margin-bottom: 10px;
    }

    > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.04em;
    }
  }

  .section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > img {
      width: 315px;
      margin-bottom: 60px;
    }
    
    .present-card {
      width: 315px;
      background: #191919;
      border-radius: 20px;
      padding: 30px 0;
      margin-bottom: 14px;
      
      > img {
        width: 48px;
        margin-bottom: 9px;
      }
      
      > p {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.04em;
        margin-bottom: 10px;
      }
      
      > button {
        padding: 8px 20px;
        background: #592AE0;
        border-radius: 50px;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
      }
    }
    
    .note-box {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.04em;
      margin-bottom: 80px;
    }
  }
  
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    color: #AAAAAA;
    background: #333333;
    width: 100%;
    
    img {
      width: 36px;
      margin-bottom: 4px;
    }
    
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.04em;
      color: #FFFFFF;
    }
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 120px 0 180px;

    .title-box {
      margin-bottom: 80px;

      .emoji-box {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin-bottom: 16px;

        img {
          width: 60px;
        }
      }

      > h2 {
        font-weight: 900;
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 16px;
      }

      > p {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.04em;
      }
    }

    .section-content {
      > img {
        width: 560px;
        margin-bottom: 80px;
      }

      .present-card {
        width: 338px;
        padding: 37px 0 30px;
        
        > p {
          margin-bottom: 21px;
        }
      }

      .note-box {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.04em;
        color: #AAAAAA;
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 0;
      color: #AAAAAA;
      background: #333333;
      width: 100%;

      img {
        width: 36px;
        margin-bottom: 4px;
      }

      p {
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
      }
    }
  }
`;

const TestSection = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <TimetableSectionWrapper id={"eng-test"}>
      <div className="title-box">
        <div className="emoji-box">
          <img src={WriteEmoji} alt="필기 이모지" />
        </div>
        <h2 className="section-title">ENG 능력평가 소개</h2>
        <p className="section-description">
          당신은 엔지니어링팀을 얼마나 잘 알고 계시나요?
          <br />
          ENG 능력평가를 풀어 테스트 해보세요!
        </p>
      </div>
      <div className="section-content">
        <img
          src={isMobile ? TestImageMobile : TestImageTablet}
          alt="ENG능력고사 예시 이미지"
        />
        <div className="present-card">
          <img src={MonkeyEmoji} alt="원숭이 이모지" />
          <p>고득점자를 위한 <br/> 엄청난 선물이 있다는데... 더보기</p>
          <button>문제 풀러 가기</button>
        </div>
        <div className="note-box">
          <p>* 상품과 문제풀이 링크는 당일에 공개됩니다.</p>
        </div>
      </div>
    </TimetableSectionWrapper>
  );
};

export default TestSection;
