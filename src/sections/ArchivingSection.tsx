import styled from "styled-components";
import FilmEmoji from "../assets/emoji-film.png";

const ArchivingSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  
  .section-content {
    .archiving-card {
      width: 315px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #191919;
      border-radius: 40px;
      padding: 20px 0;
      text-align: center;
      
      img {
        width: 48px;
        margin-bottom: 10px;
      }
      
      p {
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.04em;
        margin-bottom: 20px;
      }
      
      button {
        background: #592AE0;
        border-radius: 50px;
        padding: 8px 20px;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }

  ${({theme}) => theme.breakpoint.tablet} {
    margin-bottom: 180px;

    .section-content {
      .archiving-card {
        width: 330px;
        padding: 30px 0;

        img {
          width: 60px;
          margin-bottom: 15px;
        }

        p {
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

const ArchivingSection = () => {
  return (
    <ArchivingSectionWrapper>
      <div className="section-content">
        <article className="archiving-card">
          <img src={FilmEmoji} alt="필름 이모지" />
          <p>지난 엔지니어링 데이가 <br />궁금하다면?</p>
          <button onClick={() => window.open("https://www.notion.so/codestates/de1577d897514e4ab75ad459adccd177")}>다시 보러 가기</button>
        </article>
      </div>
    </ArchivingSectionWrapper>
  )
}

export default ArchivingSection;
