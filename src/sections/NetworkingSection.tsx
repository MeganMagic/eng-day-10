import styled from "styled-components";
import HandshakeEmoji from "../assets/emoji-handshake.png";
import NetworkingSectionMap  from "../assets/networking-section-map.png";

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
      color: #AAAAAA;
    }
  }

  ${({theme}) => theme.breakpoint.tablet} {
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
    }
  }
`;

const NetworkingSection = () => {
  return <NetworkingSectionWrapper>
    <div className="title-box">
      <div className="emoji-box">
        <img src={HandshakeEmoji} alt="악수하는 이모지"/>
      </div>
      <h2 className="section-title">네트워킹</h2>
      <p className="section-description">
        회식... 아니 네트워킹을 통해
        <br />ENG 크루들과 많은 이야기를 나눠보세요
      </p>
    </div>
    <div className="section-content">
      <article className="networking-location-card">
        <div className="image-wrapper">
          <img src={NetworkingSectionMap} alt="회식 장소 지도"/>
        </div>
        <div className="card-description">
          <p className="location-name">산에산 화덕구이 발산점</p>
          <p className="location-address">
            서울 강서구 공항대로 236 쿠쿠마곡빌딩 11층
            <br />/ 5호선 발산역 8번출구 도보 5분
          </p>
        </div>
      </article>
      <div className="note-box">
        <p className="note">* 더 괜찮은 회식 장소를 아는 경우 추천 부탁드려요 🙇‍♀️</p>
        <p className="note">* 행사 후 회식 참여가 어려운 경우 미리 말씀해주세요</p>
      </div>
    </div>
  </NetworkingSectionWrapper>
}

export default NetworkingSection;
