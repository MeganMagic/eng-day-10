import styled from "styled-components";
import HandshakeEmoji from "../assets/emoji-handshake.png";
import NetworkingSectionMap from "../assets/networking-section-map.png";
import BowEmoji from "../assets/emoji-bow.png";

const NetworkingSectionWrapper = styled.section`
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

    .networking-location-card {
      display: flex;
      flex-direction: column;
      width: 315px;

      .image-wrapper {
        width: 100%;
        height: 240px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px 30px 0 0;
        }
      }

      .card-description {
        background: #191919;
        padding: 24px 0 32px;
        border-radius: 0 0 30px 30px;
        margin-bottom: 16px;

        .location-name {
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.025em;
          margin-bottom: 4px;
        }

        .location-address {
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: -0.025em;
        }
      }
    }

    .note-box {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.04em;
      color: #aaaaaa;
    }
    
    .temp-card {
      width: 315px;
      background: #191919;
      border-radius: 20px;
      padding: 80px 0;
      
      > img {
        width: 48px;
        margin-bottom: 10px;
      }
      
      .info-title {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.04em;
      }
      
      .info-description {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.04em;
        color: #CCCCCC;
      }
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
      .networking-location-card {
        width: 360px;

        .image-wrapper {
          width: 100%;
          height: 240px;
        }

        .card-description {
          padding: 32px 0 40px;
          border-radius: 0 0 30px 30px;
          margin-bottom: 24px;

          .location-name {
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 8px;
          }
        }
      }

      .note-box {
        font-size: 14px;
        line-height: 21px;
      }

      .temp-card {
        width: 360px;
        background: #191919;
        border-radius: 20px;
        padding: 80px 0;

        > img {
          width: 48px;
          margin-bottom: 15px;
        }

        .info-title {
          font-weight: 700;
          font-size: 22px;
          line-height: 27px;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
        }

        .info-description {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.04em;
          color: #CCCCCC;
        }
      }
    }
    
    
  }
`;

const NetworkingSection = () => {
  return (
    <NetworkingSectionWrapper id={"networking"}>
      <div className="title-box">
        <div className="emoji-box">
          <img src={HandshakeEmoji} alt="???????????? ?????????" />
        </div>
        <h2 className="section-title">????????????</h2>
        <p className="section-description">
          ??????... ?????? ??????????????? ??????
          <br />
          ENG ???????????? ?????? ???????????? ???????????????
        </p>
      </div>
      <div className="section-content">
        {/*<article className="networking-location-card">*/}
        {/*  <div className="image-wrapper">*/}
        {/*    <img src={NetworkingSectionMap} alt="?????? ?????? ??????" />*/}
        {/*  </div>*/}
        {/*  <div className="card-description">*/}
        {/*    <p className="location-name">????????? ???????????? ?????????</p>*/}
        {/*    <p className="location-address">*/}
        {/*      ?????? ????????? ???????????? 236 ?????????????????? 11???*/}
        {/*      <br />/ 5?????? ????????? 8????????? ?????? 5???*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</article>*/}
        {/*<div className="note-box">*/}
        {/*  <p className="note">*/}
        {/*    * ??? ????????? ?????? ????????? ?????? ?????? ?????? ??????????????? ?????????????*/}
        {/*  </p>*/}
        {/*  <p className="note">*/}
        {/*    * ?????? ??? ?????? ????????? ????????? ?????? ?????? ??????????????????*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className="temp-card">
          <img src={BowEmoji} alt="?????? ?????????" />
          <p className="info-title">?????? ?????? ????????????</p>
          <p className="info-description">????????? ???????????? ENG????????? ?????? ?????? ??????????????????.</p>
        </div>
      </div>
    </NetworkingSectionWrapper>
  );
};

export default NetworkingSection;
