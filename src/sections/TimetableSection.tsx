import styled from "styled-components";
import CalendarEmoji from "../assets/emoji-calendar.png";
import TimetableImageMobile from "../assets/timetable-section-main-mobile.png";
import TimetableImageTablet from "../assets/timetable-section-main-tablet.png";
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
    img {
      width: 315px;
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
      img {
        width: 560px;
      }
    }
  }
`;

const TimetableSection = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <TimetableSectionWrapper id={"timetable"}>
      <div className="title-box">
        <div className="emoji-box">
          <img src={CalendarEmoji} alt="?????? ?????????" />
        </div>
        <h2 className="section-title">?????? ?????????</h2>
      </div>
      <div className="section-content">
        <img
          src={isMobile ? TimetableImageMobile : TimetableImageTablet}
          alt="????????????????????? ?????????"
        />
      </div>
    </TimetableSectionWrapper>
  );
};

export default TimetableSection;
